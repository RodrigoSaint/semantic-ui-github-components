import React from "react";
import { Card } from "semantic-ui-react";

import GithubRepository from "./repository";
import RepositoryCard from "./card";

export default class GithubRepositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryCollection: []
    };

    GithubRepository.getRepository(props.username)
      .then(repositoryCollection =>
        repositoryCollection.filter(
          repository =>
            !repository.fork &&
            `${props.username}.github.io` !== repository.name
        )
      )
      .then(repositoryCollection => this.setState({ repositoryCollection }));
  }

  render() {
    return (
      <Card.Group>
        {this.state.repositoryCollection.map(repository => (
          <RepositoryCard key={repository.html_url} repository={repository} />
        ))}
      </Card.Group>
    );
  }
}
