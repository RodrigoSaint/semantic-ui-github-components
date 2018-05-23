import React from "react";
import { Modal, Dimmer, Loader, Icon, Button } from "semantic-ui-react";
import GithubRepository from "./repository";

class RepositoryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      notFound: undefined
    };
    this.onOpen = this.onOpen.bind(this);
  }
  onOpen() {
    GithubRepository.getReadMe(
      this.props.repository.owner.login,
      this.props.repository.name
    )
      .then(response =>
        this.setState({ content: response.data, notFound: false })
      )
      .catch(error => this.setState({ notFound: true }));
  }

  get modalContent() {
    if (this.state.content)
      return <div dangerouslySetInnerHTML={{ __html: this.state.content }} />;
    if (this.state.notFound)
      return <h2>This project do not have a README.md yet</h2>;
    return null;
  }

  render() {
    return (
      <Modal
        onOpen={this.onOpen}
        trigger={
          <Button positive>
            <Icon name="code" />
            Show me details!
          </Button>
        }
        closeIcon
      >
        <Modal.Header>{this.props.repository.name}</Modal.Header>
        <Modal.Content>
          <Dimmer active={this.state.notFound === undefined}>
            <Loader />
          </Dimmer>
          {this.modalContent}
        </Modal.Content>
      </Modal>
    );
  }
}

export default RepositoryModal;
