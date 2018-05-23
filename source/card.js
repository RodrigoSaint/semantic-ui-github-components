import React from "react";
import { Image, Card } from "semantic-ui-react";
import RepositoryModal from "./modal";

const RepositoryCard = props => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={props.repository.owner.avatar_url}
        />
        <Card.Header className="ellipsis">
          <a target="_blank" href={props.repository.html_url}>
            {props.repository.name}
          </a>
        </Card.Header>
        <Card.Meta>Language {props.repository.language}</Card.Meta>
        <Card.Description>
          {props.repository.description ||
            "This project has no description yet"}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <RepositoryModal repository={props.repository} />
        </div>
      </Card.Content>
    </Card>
  );
};

export default RepositoryCard;
