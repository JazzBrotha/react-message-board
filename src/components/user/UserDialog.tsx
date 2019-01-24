import * as React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import IUser from '../../models/user.model';

interface IUserDialogProps {
  users: IUser[];
  setUser: Function;
}

interface IUserDialogState {
  isDialogOpen: boolean;
}

class UserDialog extends React.Component<IUserDialogProps, IUserDialogState> {
  state = {
    isDialogOpen: false
  };
  setActiveUser = (user: IUser) => {
    this.props.setUser(user);
    this.toggleOpenState();
  };

  toggleOpenState = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen
    });
  };

  render() {
    const { users } = this.props;
    const { isDialogOpen } = this.state;
    return (
      <Dialog
        onClose={this.toggleOpenState}
        aria-labelledby="dialog-title"
        open={isDialogOpen}
      >
        <DialogTitle id="dialog-title">Select a user</DialogTitle>
        <List>
          {users.map((user: IUser) => (
            <ListItem
              button={true}
              onClick={() => this.setActiveUser(user)}
              key={user.id}
            >
              <ListItemAvatar>
                <Avatar src={user.imageUrl}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    );
  }
}
export default UserDialog;
