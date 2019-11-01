import { createSelector } from 'reselect';

const getCurrentSession = (state) => state.userData.get('currentSession');

const getUsers = (state) => state.userData.get('users');


const getUserName = (state) => state.userData.getIn(['newUser', 'userName']);
const getName = (state) => state.userData.getIn(['newUser', 'name']);
const getEmail = (state) => state.userData.getIn(['newUser', 'email']);
const getAge = (state) => state.userData.getIn(['newUser', 'age']);
const getSex = (state) => state.userData.getIn(['newUser', 'sex']);

export const makeGetNewUsers = () => {
    return createSelector(
        [getCurrentSession, getUsers],
        (currentIds, users) => {
            return users.toSeq().filter(user => currentIds.findIndex(currentId => currentId === user.get('id')) === -1 ? false:true);
        }
    )
}

export const makeNewUserDetails = () => {
    return createSelector(
        [getUserName, getName, getEmail, getAge, getSex],
        (userName, name, email, age, sex) => {
            return { userName, name, email, age, sex };
        }
    )
}
