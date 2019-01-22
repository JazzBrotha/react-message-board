import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import {
  BeachAccess as BeachAccessIcon,
  Image as ImageIcon,
  Work as WorkIcon
} from '@material-ui/icons';
import * as React from 'react';

const messageStyles = (theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 360,
    width: '100%'
  }
});

const Message = (props: any) => {
  const { message } = props;
  return (    
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary={message.message} secondary={message.author} />
      </ListItem>
  );
};
export default withStyles(messageStyles)(Message);
