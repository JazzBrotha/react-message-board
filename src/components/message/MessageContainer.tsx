import * as React from 'react';
import { connect } from 'react-redux';
import MessageDialog from './MessageDialog';
import MessageBoard from './MessageBoard';
import {
  fetchMessages,
  newMessage,
  removeMessage,
  updateMessage
} from '../../actions/messageActions';
import { getUser, fetchUsers } from '../../actions/userActions';
import IMessage from '../../models/message.model';

interface IMessageContainerProps extends StateProps, DispatchProps {}

interface IMessageContainerState {
  mode: string;
  activeMessage: IMessage;
  isDialogOpen: boolean;
}

class MessageContainer extends React.Component<
  IMessageContainerProps,
  IMessageContainerState
> {
  state = {
    isDialogOpen: false,
    mode: '',
    activeMessage: undefined
  };
  componentDidMount = () => {
    this.props.fetchMessages();
    this.props.fetchUsers();
  };

  setMode = (mode: string) => {
    this.setState({
      mode
    });
    this.toggleOpenState();
  };

  toggleOpenState = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen
    });
  };

  setActiveMessage = (message: IMessage) => {
    this.setState({
      activeMessage: message
    });
  };

  createMessage = (messageText: string) => {
    const { activeUser } = this.props;
    const messageId: number = this.props.messages.length
      ? this.props.messages[this.props.messages.length - 1].id + 1
      : 1;
    const newMessage: IMessage = {
      id: messageId,
      message: messageText,
      parentId: null,
      author: activeUser.id
    };
    this.props.newMessage(newMessage);
  };
  submitMessage = (messageText: string, mode: string) => {
    const { activeMessage } = this.state;
    if (mode === 'Create') {
      this.createMessage(messageText);
    } else if (mode === 'Edit') {
      this.changeMessage(messageText);
    } else {
      this.commentOnMessage(messageText);
    }
    this.toggleOpenState();
  };

  deleteMessage = (id: number) => {
    this.props.removeMessage(id);
  };

  changeMessage = (messageText: string) => {
    const { activeMessage } = this.state;
    activeMessage.message = messageText;
    this.props.updateMessage(activeMessage);
  };

  commentOnMessage = (messageText: string) => {
    const { activeUser } = this.props;
    const { activeMessage } = this.state;
    const messageId: number = this.props.messages.length
      ? this.props.messages[this.props.messages.length - 1].id + 1
      : 1;
    const newMessage: IMessage = {
      id: messageId,
      message: messageText,
      parentId: activeMessage.id,
      author: activeUser.id
    };
    this.props.newMessage(newMessage);
  };
  render() {
    const { messages, activeUser, users } = this.props;
    const { mode, isDialogOpen } = this.state;
    return (
      <React.Fragment>
        <MessageDialog
          activeUser={activeUser}
          mode={mode}
          setMode={this.setMode}
          submitMessage={this.submitMessage}
          isDialogOpen={isDialogOpen}
          toggleOpenState={this.toggleOpenState}
        />
        <MessageBoard
          setMode={this.setMode}
          submitMessage={this.submitMessage}
          messages={messages}
          users={users}
          activeUser={activeUser}
          deleteMessage={this.deleteMessage}
          setActiveMessage={this.setActiveMessage}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  messages: state.messages.items,
  users: state.users.items,
  activeUser: state.users.item
});

const mapDispatchToProps = {
  fetchMessages,
  newMessage,
  removeMessage,
  updateMessage,
  getUser,
  fetchUsers
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContainer);
