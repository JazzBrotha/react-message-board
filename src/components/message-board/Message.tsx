import {
  Avatar,
  ListItem,
  ListItemText,
  withStyles,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  Collapse,
  List,
  ListItemIcon
} from '@material-ui/core';
import {
  Image as ImageIcon,
  Comment as CommentIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ExpandLess,
  ExpandMore,
  StarBorder
} from '@material-ui/icons';
import * as React from 'react';
import IUser from '../../models/user.model';
import MessageListCard from './MessageListCard';

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
    <React.Fragment>
      <ListItem className={classes.root}>
        <MessageListCard
          users={users}
          message={message}
          setActiveMessage={setActiveMessage}
          setMode={setMode}
          deleteMessage={deleteMessage}
          activeUser={activeUser}
        />
        {/* <ListItemAvatar>
          <Avatar
            src={
              users.find((user: IUser) => user.id === message.author).imageUrl
            }
          >
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={message.message}
          secondary={
            users.find((user: IUser) => user.id === message.author).name
          }
        />
        <ListItemSecondaryAction>
          {message.author === activeUser.id ? (
            <React.Fragment>
              <IconButton
                aria-label="Edit"
                onClick={() => {
                  setActiveMessage(message);
                  setMode('Edit');
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
                <React.Fragment>
                  <IconButton
                    aria-label="Comments"
                    onClick={() => {
                      setActiveMessage(message);
                      setMode('Comment');
                    }}
                  >
                    <CommentIcon />
                  </IconButton>
                </React.Fragment>
              ) : null}
            </React.Fragment>
          )}
        </ListItemSecondaryAction> */}
      </ListItem>
    </React.Fragment>
  );
};
export default withStyles(messageStyles)(Message);
