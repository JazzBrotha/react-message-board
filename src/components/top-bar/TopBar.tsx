import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';
import * as React from 'react';

const topBarStyles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
};

const TopBar = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            MessageBoard
          </Typography>
          <Button color="inherit">Create New Message</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(topBarStyles)(TopBar);
