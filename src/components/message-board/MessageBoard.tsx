import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { fetchMessages, newMessage } from '../../actions/messageActions';
import IMessage from '../../models/message.model';

interface IMessageBoardProps extends StateProps, DispatchProps {}

class MessageBoard extends React.Component<IMessageBoardProps> {
  componentDidMount =() => {
    this.props.fetchMessages();
  }

  createMessage = () => {
    const message: IMessage = {
      id: 1,
      message: 'test',
      parentId: 1,
      author: 1
    };
    this.props.newMessage(message);
  }

    render() {
      const {messages} = this.props;
        return (
            <Grid container alignItems="center" justify="center" direction="column">
                <h1>Messages</h1>
                { messages.map((message: IMessage) => message.message )}
                <Button onClick={this.createMessage}>Create a new message</Button>
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