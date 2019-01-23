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

const UserDialog = ({
  users,
  isDialogOpen,
  toggleOpenState,
  setActiveUser
}) => (
  <div>
    <Dialog
      onClose={toggleOpenState}
      aria-labelledby="simple-dialog-title"
      open={isDialogOpen}
    >
      <DialogTitle id="simple-dialog-title">Select a user</DialogTitle>
      <List>
        {users.map((user: IUser) => (
          <ListItem
            button={true}
            onClick={() => setActiveUser(user)}
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
  </div>
);
export default UserDialog;
