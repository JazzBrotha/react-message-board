import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const MessageDialog = ({
  activeUser,
  isDialogOpen,
  toggleOpenState,
  onChange,
  submitMessage,
  mode,
  setMode
}) => (
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
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleOpenState} color="primary">
          Cancel
        </Button>
        <Button onClick={submitMessage} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default MessageDialog;
