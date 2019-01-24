import * as React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, setUser } from '../../actions/userActions';
import UserDialog from './UserDialog';
import IUser from '../../models/user.model';

interface IUserContainerProps extends StateProps, DispatchProps {
  isDialogOpen: boolean;
  toggleOpenState: Function;
}

class UserContainer extends React.Component<IUserContainerProps> {
  componentDidMount = () => {
    this.props.fetchUsers();
  };

  setActiveUser = (user: IUser) => {
    this.props.setUser(user);
    this.props.toggleOpenState();
  };
  render() {
    const { users, isDialogOpen, toggleOpenState } = this.props;
    return (
      <UserDialog
        setActiveUser={this.setActiveUser}
        users={users}
        isDialogOpen={isDialogOpen}
        toggleOpenState={toggleOpenState}
      />
    );
  }
}
const mapStateToProps = state => ({
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
)(UserContainer);
