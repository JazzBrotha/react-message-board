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
  toggleOpenState: () => void;
}

interface IMessageDialogState {
  messageText: string;
}

class MessageDialog extends React.Component<
  IMessageDialogProps,
  IMessageDialogState
> {
  state = {
    messageText: ''
  };

  onChange = (e: any) => {
    this.setState({
      messageText: e.target.value.trim()
    });
  };

  render() {
    const {
      activeUser,
      mode,
      setMode,
      submitMessage,
      toggleOpenState,
      isDialogOpen
    } = this.props;
    const { messageText } = this.state;
    return (
      <Dialog
        open={isDialogOpen}
        onClose={toggleOpenState}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`${mode} Message`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Please fill in the field below to ${mode.toLowerCase()} message`}.
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
          <Button onClick={toggleOpenState} color="primary">
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
    );
  }
}

export default MessageDialog;
