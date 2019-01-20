import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
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
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(topBarStyles)(TopBar);
