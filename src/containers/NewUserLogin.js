import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toJS } from '../components/to-js';
import UserLogin from '../components/UserLogin';
import { updateDetails } from '../actions';

const getUserName = (state) => state.userData.getIn(['newUser', 'userName']);
const getEmail = (state) => state.userData.getIn(['newUser', 'email']);
const getPassword = (state) => state.userData.getIn(['newUser', 'password']);

const mapStateToProps = (state) => {
    const userName = getUserName(state);
    const email = getEmail(state);
    const password = getPassword(state);
    return { userName, email,password};
}


const mapDispatchToProps = dispatch => {
    return {
        onDetailsUpdate: (type, data, fieldName) => {
            dispatch(updateDetails(type, data.target.value, fieldName))
        }
    };
};

const NewUserLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(toJS(withRouter(UserLogin)))

export default NewUserLogin;