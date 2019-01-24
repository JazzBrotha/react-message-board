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
import UserContainer from '../user/UserContainer';

const topBarStyles = {
  grow: {
    flexGrow: 1
  }
};

interface ITopBar extends StateProps, DispatchProps {
  classes: Classes;
}

class TopBar extends React.Component<ITopBar> {
  state = {
    isDialogOpen: false
  };
  componentDidMount = () => {
    this.props.getUser();
  };
  toggleOpenState = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen
    });
  };
  render() {
    const { classes, user } = this.props;
    const { isDialogOpen } = this.state;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              React Message Board
            </Typography>
            <Avatar src={user.imageUrl}>
              <ImageIcon />
            </Avatar>
            <Button color="inherit" onClick={this.toggleOpenState}>
              {user ? 'Switch User' : 'Select User'}
            </Button>
          </Toolbar>
        </AppBar>
        <UserContainer
          isDialogOpen={isDialogOpen}
          toggleOpenState={this.toggleOpenState}
        />
      </React.Fragment>
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
