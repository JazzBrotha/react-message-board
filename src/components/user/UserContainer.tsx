import * as React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, setUser } from '../../actions/userActions';
import UserDialog from './UserDialog';

interface IUserContainerProps extends StateProps, DispatchProps {}

class UserContainer extends React.Component<IUserContainerProps> {
  componentDidMount = () => {
    this.props.fetchUsers();
  };
  render() {
    const { users, setUser } = this.props;
    return <UserDialog setUser={setUser} users={users} />;
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
