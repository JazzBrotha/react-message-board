import {
  Avatar,
  ListItem,
  ListItemText,
  withStyles,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import {
  Image as ImageIcon,
  Comment as CommentIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@material-ui/icons';
import * as React from 'react';

const messageStyles = (theme: any) => ({
  root: {
    width: 400
  }
});

const Message = (props: any) => {
  const { message, classes, deleteMessage, changeMessage } = props;
  return (
    <ListItem className={classes.root}>
      <Avatar>
        <ImageIcon />
      </Avatar>
      <ListItemText primary={message.message} secondary={message.author} />
      <ListItemSecondaryAction>
        {message.author === 1 ? (
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
