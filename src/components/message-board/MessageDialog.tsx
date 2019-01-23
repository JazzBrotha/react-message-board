import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IMessageDialog {
  createMessage: (event: any) => void;
}

class MessageDialog extends React.Component<IMessageDialog> {
  public state = {
    open: false,
    message: ''
  };

  public openDialog = () => {
    this.setState({ open: true });
  };

  public closeDialog = () => {
    this.setState({ open: false });
  };

  public onChange = (e: any) => {
    this.setState({
      message: e.target.value.trim()
    });
  };

  public submitMessage = () => {
    const { message } = this.state;
    if (message) {
      this.props.createMessage(message);
      this.setState({
        open: false
      });
    }
  };
  public render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.openDialog}>
          Create New Message
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.closeDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create New Message</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill in the field below to create your message.
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
            <Button onClick={this.closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitMessage} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MessageDialog;
