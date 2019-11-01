import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toJS } from '../components/to-js';
import UserDetail from '../components/UserDetail';
import { updateDetails, addUser } from '../actions';


const getUserName = (state) => state.userData.getIn(['newUser', 'userName']);
const getEmail = (state) => state.userData.getIn(['newUser', 'email']);
const getPassword = (state) => state.userData.getIn(['newUser', 'password']);
const getName = (state) => state.userData.getIn(['newUser', 'name']);
const getAge = (state) => state.userData.getIn(['newUser', 'age']);
const getSex = (state) => state.userData.getIn(['newUser', 'sex']);

const mapStateToProps = (state) => {
    const userName = getUserName(state);
    const password = getPassword(state);
    const email = getEmail(state);
    const name = getName(state);
    const age = getAge(state);
    const sex = getSex(state);
    return { userName, email,password,name, age, sex};
}


const mapDispatchToProps = dispatch => {
    return {
        onDetailsUpdate: (type, data, fieldName) => {
            const inputData = fieldName === "age" ? Number(data.target.value) : data.target.value;
            dispatch(updateDetails(type, inputData, fieldName));
        },
        handleSubmit: () => {
            dispatch(addUser());
        }
    };
};

const NewUserDetail = connect(
    mapStateToProps,
    mapDispatchToProps
)(toJS(withRouter(UserDetail)))

export default NewUserDetail;