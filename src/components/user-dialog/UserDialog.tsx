import * as React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { fetchUsers, setUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import IUser from '../../models/user.model';

interface IUserDialog extends StateProps, DispatchProps {}

class UserDialog extends React.Component<IUserDialog> {
  public state = {
    isOpen: false
  };
  public componentDidMount = () => {
    this.props.fetchUsers();
  };
  public toggleOpenState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  public setActiveUser = (user: IUser) => {
    this.props.setUser(user);
    this.toggleOpenState();
  };

  public render() {
    const { users } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.toggleOpenState}
        >
          Select User
        </Button>
        <Dialog
          onClose={this.toggleOpenState}
          aria-labelledby="simple-dialog-title"
          open={isOpen}
        >
          <DialogTitle id="simple-dialog-title">Select a user</DialogTitle>
          <List>
            {users.map((user: IUser) => (
              <ListItem
                button={true}
                onClick={() => this.setActiveUser(user)}
                key={user.id}
              >
                <ListItemAvatar>
                  <Avatar src={user.imageUrl}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users.items
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
)(UserDialog);
