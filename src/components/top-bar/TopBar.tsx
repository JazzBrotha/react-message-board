import * as React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
  Avatar
} from '@material-ui/core';
import { Image as ImageIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import { Classes } from 'jss';

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

interface ITopBar extends StateProps, DispatchProps {
  classes: Classes;
}

class TopBar extends React.Component<ITopBar> {
  public render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              MessageBoard
            </Typography>
            <Avatar src={user.imageUrl}>
              <ImageIcon />
            </Avatar>
            <Button color="inherit">Select User</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.users.item
});

const mapDispatchToProps = {
  getUser
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(topBarStyles)(TopBar));
