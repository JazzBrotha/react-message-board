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
import { fetchUsers, setUser } from '../../actions/userActions';
import { Classes } from 'jss';
import UserDialog from '../user-dialog/UserDialog';
import IUser from '../../models/user.model';

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
  public state = {
    isDialogOpen: false
  };
  public componentDidMount = () => {
    this.props.fetchUsers();
  };
  public toggleOpenState = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen
    });
  };

  public setActiveUser = (user: IUser) => {
    this.props.setUser(user);
    this.toggleOpenState();
  };
  public render() {
    const { classes, user, users } = this.props;
    const { isDialogOpen } = this.state;
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              React Message Board
            </Typography>
            <Avatar src={user.imageUrl}>
              <ImageIcon />
            </Avatar>
            <Button color="inherit" onClick={this.toggleOpenState}>
              Select User
            </Button>
          </Toolbar>
          <UserDialog
            isDialogOpen={isDialogOpen}
            toggleOpenState={this.toggleOpenState}
            setActiveUser={this.setActiveUser}
            users={users}
          />
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users.items,
  user: state.users.item
});

const mapDispatchToProps = {
  fetchUsers,
  setUser
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(topBarStyles)(TopBar));
