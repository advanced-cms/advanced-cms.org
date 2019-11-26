import * as React from "react";
import {Header, Container, Segment, Icon} from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutUsPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            About Us
          </Header.Content>
        </Header>
      </Segment>
      <Segment>
        We are just two developers that love creating Open Source stuff.
      </Segment>
    </Container>
  );
};

export default withLayout(AboutUsPage);
