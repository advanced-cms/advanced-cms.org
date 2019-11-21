import * as React from "react";
import {Header, Container, Segment, Icon} from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const ProjectsPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            Projects
          </Header.Content>
        </Header>
      </Segment>
    </Container>
  );
};

export default withLayout(ProjectsPage);
