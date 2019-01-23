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
  public componentDidMount = () => {
    this.props.fetchMessages();
  };

  public createMessage = (message: string) => {
    const messageId: number = this.props.messages.length + 1;
    const newMessage: IMessage = {
      id: messageId,
      message,
      parentId: null,
      author: 1
    };
    this.props.newMessage(newMessage);
  };

  public deleteMessage = (id: number) => {
    this.props.removeMessage(id);
  };

  public changeMessage = (messageToChange: IMessage) => {
    messageToChange.message = 'test';
    this.props.updateMessage(messageToChange);
  };

  public render() {
    const { messages } = this.props;
    return (
      <main>
        <Grid
          container={true}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <h1>Messages</h1>
          {messages.length ? (
            <List>
              {messages.map((message: IMessage) => (
                <Message
                  key={message.id}
                  message={message}
                  changeMessage={this.changeMessage}
                  deleteMessage={this.deleteMessage}
                />
              ))}
            </List>
          ) : (
            <p>No messages posted.</p>
          )}
          <MessageDialog createMessage={this.createMessage} />
        </Grid>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({
  messages: state.messages.items,
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
