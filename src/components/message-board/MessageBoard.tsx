import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, List } from '@material-ui/core';
import { fetchMessages, newMessage } from '../../actions/messageActions';
import IMessage from '../../models/message.model';
import Message from './Message';
import MessageDialog from './MessageDialog';

interface IMessageBoardProps extends StateProps, DispatchProps {}

class MessageBoard extends React.Component<IMessageBoardProps> {
  componentDidMount =() => {
    this.props.fetchMessages();
  }

  createMessage = (message: string) => {
    const newMessage: IMessage = {
      id: 1,
      message: message,
      parentId: 1,
      author: 1
    };
    this.props.newMessage(newMessage);
  }

  render() {
    const { messages } = this.props;
      return (
          <Grid container alignItems="center" justify="center" direction="column">
              <h1>Messages</h1>
              <List>
              { messages.map((message: IMessage) => (
                <Message key={message.id} message={message}/>
                )
              )}
                </List>
              <MessageDialog createMessage={this.createMessage} />
          </Grid>
      );
  }
}

const mapStateToProps = (state: any) => ({
  messages: state.messages.items
});

const mapDispatchToProps = { fetchMessages, newMessage };


type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoard);