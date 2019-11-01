import { connect } from 'react-redux';

import { toJS } from '../components/to-js';
import UserList from '../components/UserList';
import { makeGetNewUsers } from '../selectors/userSelectors';


const makeMapStateToProps = () => {
    const getNewUsers = makeGetNewUsers()
    const mapStateToProps = (state) => {
        return {
            users: getNewUsers(state),
            type:"New"
        }
    }
    return mapStateToProps
}



const NewUsersList = connect(
    makeMapStateToProps
)(toJS(UserList))

export default NewUsersList;