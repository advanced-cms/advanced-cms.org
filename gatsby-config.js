function getFeed(authorDisplayName, author) {
    return {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.description || edge.node.excerpt,
                    author: edge.node.frontmatter.author.id,
                    date: edge.node.frontmatter.createdDate,
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                })
            })
        },
        query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___createdDate]}, filter: {frontmatter: {draft: {eq: false}, author: {id: {eq: "${authorDisplayName}"}}}}) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        description
                        createdDate
                        author {
                            id
                        }
                      }
                    }
                  }
                }
              }
            `,
        output: `/author/${author}/feed.xml`,
        title: `Advanced CMS Blog - ${authorDisplayName}`
    }
}

/* eslint-disable quotes */
module.exports = {
    siteMetadata: {
        title: `Advanced CMS`,
        description: `Advanced CMS organization`,
        googleVerification: `abcdefz`,
        disqus: `advanced-cms-org`,
        siteUrl: `https://advanced-cms.org`
    },
    mapping: {
        'MarkdownRemark.frontmatter.author': `AuthorJson`
    },
    plugins: [
        // Expose `/data` to graphQL layer
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`
            }
        },

        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-153216446-1',
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true
            }
        },

        // Parse all markdown files (each plugin add/parse some data into graphQL layer)
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1407,
                            quality: 80,
                            backgroundColor: `#f7f0eb`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-autolink-headers`
                ]
            }
        },

        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                  {
                    site {
                      siteMetadata {
                        title
                        description
                        siteUrl
                        site_url: siteUrl
                      }
                    }
                  }
                `,
                feeds: [
                    getFeed("Bartosz Sekuła", "bart"),
                    getFeed("Grzegorz Wiecheć", "greg")
                ],
            }
        },

        // Parse all images files
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,

        // Parse JSON files
        `gatsby-transformer-json`,

        // Add typescript stack into webpack
        `gatsby-plugin-typescript`,

        // This plugin takes your configuration and generates a
        // web manifest file so your website can be added to your
        // homescreen on Android.
        /* eslint-disable camelcase */
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Advanced CMS`,
                short_name: `Advanced CMS`,
                start_url: `/`,
                background_color: `#f7f7f7`,
                theme_color: `#191919`,
                display: `minimal-ui`
            }
        },
        /* eslint-enable camelcase */

        // This plugin generates a service worker and AppShell
        // html file so the site works offline and is otherwise
        // resistant to bad networks. Works with almost any
        // site!
        `gatsby-plugin-offline`
    ]
}
;
