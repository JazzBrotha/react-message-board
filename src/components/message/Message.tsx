import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  withStyles
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
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};
export default withStyles(messageStyles)(Message);
