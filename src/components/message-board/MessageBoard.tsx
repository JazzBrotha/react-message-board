import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, List } from '@material-ui/core';
import {
  fetchMessages,
  newMessage,
  removeMessage,
  updateMessage
} from '../../actions/messageActions';
import { fetchUsers } from '../../actions/userActions';
import IMessage from '../../models/message.model';
import Message from './Message';
import MessageDialog from './MessageDialog';

interface IMessageBoardProps extends StateProps, DispatchProps {}

class MessageBoard extends React.Component<IMessageBoardProps> {
  public state = {
    isDialogOpen: false,
    messageText: '',
    mode: '',
    activeMessage: undefined
  };
  public componentDidMount = () => {
    this.props.fetchMessages();
  };

  public setMode = (mode: string) => {
    this.setState({
      mode
    });
    this.toggleOpenState();
  };

  public setActiveMessage = (message: IMessage) => {
    this.setState({
      activeMessage: message
    });
    this.toggleOpenState();
  };

  public toggleOpenState = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen
    });
  };

  public onChange = (e: any) => {
    this.setState({
      messageText: e.target.value.trim()
    });
  };

  public submitMessage = () => {
    const { messageText, mode, activeMessage } = this.state;
    if (mode === 'Create') {
      this.createMessage(messageText);
    } else if (mode === 'Edit') {
      this.changeMessage(activeMessage);
    } else {
      this.commentOnMessage(activeMessage);
    }
    this.setState({
      isDialogOpen: false
    });
  };

  public createMessage = (message: string) => {
    const messageId: number = this.props.messages.length + 1;
    const { activeUser } = this.props;
    const newMessage: IMessage = {
      id: messageId,
      message,
      parentId: null,
      author: activeUser.id
    };
    this.props.newMessage(newMessage);
  };

  public deleteMessage = (id: number) => {
    this.props.removeMessage(id);
  };

  public changeMessage = (messageToChange: IMessage) => {
    messageToChange.message = this.state.messageText;
    this.props.updateMessage(messageToChange);
    this.toggleOpenState();
  };

  public commentOnMessage = (parentMessage: IMessage) => {
    const messageId: number = this.props.messages.length + 1;
    const { activeUser } = this.props;
    const newMessage: IMessage = {
      id: messageId,
      message: this.state.messageText,
      parentId: parentMessage.id,
      author: activeUser.id
    };
    this.props.newMessage(newMessage);
  };

  public render() {
    const { messages, activeUser, users } = this.props;
    const { isDialogOpen, mode } = this.state;
    return (
      <main>
        <Grid
          container={true}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <h1>Messages</h1>
          <MessageDialog
            activeUser={activeUser}
            isDialogOpen={isDialogOpen}
            onChange={this.onChange}
            submitMessage={this.submitMessage}
            toggleOpenState={this.toggleOpenState}
            mode={mode}
            setMode={this.setMode}
          />
          {messages.length ? (
            <List>
              <Grid container={true}>
                {messages.map((message: IMessage) => (
                  <React.Fragment>
                    {!message.parentId ? (
                      <Grid item={true} key={message.id}>
                        <Message
                          currentMessage={message}
                          messages={messages}
                          setMode={this.setMode}
                          deleteMessage={this.deleteMessage}
                          activeUser={activeUser}
                          users={users}
                          setActiveMessage={this.setActiveMessage}
                        />
                      </Grid>
                    ) : null}
                  </React.Fragment>
                ))}
              </Grid>
            </List>
          ) : (
            <p>No messages posted.</p>
          )}
        </Grid>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({
  messages: state.messages.items,
  activeUser: state.users.item,
  users: state.users.items
});

const mapDispatchToProps = {
  fetchMessages,
  newMessage,
  removeMessage,
  updateMessage,
  fetchUsers
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
