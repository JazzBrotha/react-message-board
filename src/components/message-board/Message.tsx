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
    changeMessage,
    activeUser,
    users
  } = props;
  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar
          src={
            users.filter((user: IUser) => user.id === message.author)[0]
              .imageUrl
          }
        >
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={message.message} secondary={message.author} />
      <ListItemSecondaryAction>
        {message.author === activeUser.id ? (
          <React.Fragment>
            <IconButton
              aria-label="Edit"
              onClick={() => changeMessage(message)}
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
          <IconButton aria-label="Comments">
            <CommentIcon />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default withStyles(messageStyles)(Message);
