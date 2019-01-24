import {
  Avatar,
  ListItem,
  ListItemText,
  withStyles,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar
} from '@material-ui/core';
import {
  Image as ImageIcon,
  Comment as CommentIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@material-ui/icons';
import * as React from 'react';
import IUser from '../../models/user.model';

const messageStyles = (theme: any) => ({
  root: {
    width: 400
  }
});

const Message = (props: any) => {
  const {
    message,
    classes,
    deleteMessage,
    setMode,
    activeUser,
    users,
    setActiveMessage
  } = props;
  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar
          src={users.find((user: IUser) => user.id === message.author).imageUrl}
        >
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={message.message}
        secondary={users.find((user: IUser) => user.id === message.author).name}
      />
      <ListItemSecondaryAction>
        {message.author === activeUser.id ? (
          <React.Fragment>
            <IconButton
              aria-label="Edit"
              onClick={() => {
                setMode('Edit');
                setActiveMessage(message);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => deleteMessage(message.id)}
            >
              <DeleteIcon />
            </IconButton>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeUser.id ? (
              <IconButton aria-label="Comments">
                <CommentIcon />
              </IconButton>
            ) : null}
          </React.Fragment>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default withStyles(messageStyles)(Message);
