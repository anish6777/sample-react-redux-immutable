import { connect } from 'react-redux';

import { toJS } from '../components/to-js';
import UserList from '../components/UserList';

const getUsers = (state) => state.userData.get('users');

const mapStateToProps = (state) => {
    const users = getUsers(state);
    return { users,type:"All" };
}


const AllUsersList = connect(
    mapStateToProps
)(toJS(UserList))

export default AllUsersList