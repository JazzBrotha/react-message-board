import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IUser from '../../models/user.model';

interface IMessageDialogProps {
  mode: string;
  setMode: Function;
  submitMessage: Function;
  activeUser: IUser;
  isDialogOpen: boolean;
}

interface IMessageDialogState {
  isDialogOpen: boolean;
  messageText: string;
}

class MessageDialog extends React.Component<
  IMessageDialogProps,
  IMessageDialogState
> {
  state = {
    isDialogOpen: this.props.isDialogOpen,
    messageText: ''
  };

  toggleOpenState = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen
    });
  };

  onChange = (e: any) => {
    this.setState({
      messageText: e.target.value.trim()
    });
  };

  render() {
    const { activeUser, mode, setMode, submitMessage } = this.props;
    const { isDialogOpen, messageText } = this.state;
    return (
      <div>
        {activeUser.id ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setMode('Create')}
          >
            Create New Message
          </Button>
        ) : (
          <p>
            Select a user in the toolbar to create, edit, delete, and comment
            messages.
          </p>
        )}
        <Dialog
          open={isDialogOpen}
          onClose={this.toggleOpenState}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{`${mode} Message`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Please fill in the field below to ${mode.toLowerCase()} message`}
              .
            </DialogContentText>
            <TextField
              autoFocus={true}
              margin="dense"
              id="message"
              label="Message"
              type="text"
              fullWidth={true}
              onChange={this.onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleOpenState} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => submitMessage(messageText, mode)}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MessageDialog;
