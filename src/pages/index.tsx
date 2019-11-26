import * as React from "react";
import {Link} from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import {withLayout, LayoutProps, menuItems} from "../components/Layout";
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">Advanced CMS</Header>
        <Header inverted as="h2">Useful Episerver Add-ons</Header>
        <a target="_blank" className="ui huge primary button" href="https://github.com/advanced-cms/">See our
          projects</a>
      </Container>
    </Segment>

    {/*<Segment vertical className="stripe">*/}
    {/*  <Grid stackable verticalAlign="middle" className="container">*/}
    {/*    <Grid.Row>*/}
    {/*      <Grid.Column width="8">*/}
    {/*        <Header>Lorem ipsum</Header>*/}
    {/*        <p>*/}
    {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
    {/*              Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
    {/*            </p>*/}
    {/*        <Header>Dolor sit amet</Header>*/}
    {/*        <p>*/}
    {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
    {/*              Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
    {/*            </p>*/}
    {/*      </Grid.Column>*/}
    {/*      <Grid.Column width="6" floated="right">*/}
    {/*        /!* TODO replace with a pretty GIF *!/*/}
    {/*        <Header>Lorem ipsum</Header>*/}
    {/*        <p>*/}
    {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
    {/*              Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
    {/*            </p>*/}
    {/*        <Header>Dolor sit amet</Header>*/}
    {/*        <p>*/}
    {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
    {/*              Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
    {/*            </p>*/}
    {/*      </Grid.Column>*/}
    {/*    </Grid.Row>*/}
    {/*  </Grid>*/}
    {/*</Segment>*/}

    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <a target="_blank" href="https://github.com/advanced-cms/advanced-reviews">
                <Icon name="edit" />
                Advanced Reviews
              </a>
            </Header>
            <p>
              An improvement to the reviewing process that lets external users to view & review content
              items or projects without the need to access the Edit Mode.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <a target="_blank" href="https://github.com/advanced-cms/advanced-compare">
                <Icon name="history" />
                Advanced Compare
              </a>
            </Header>
            <p>
              Allow the editor to see how each page looked in different points in time. Every dependent
              block is visually included in the comparison.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="grid layout" />
              Content Grid (coming soon!)
            </Header>
            <p>
              Coming soon! Stay tuned!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
