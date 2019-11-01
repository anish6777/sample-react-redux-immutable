import { Map, updateIn , setIn, fromJS } from 'immutable';


const initialState = {
    users: [
        { id: "fbc131a0-fc01-11e9-b192-67cae1dda8ef", userName: "amr90", email: "amr90@test1.com", name: "Amar", age: 30, sex: "Male" },
        { id: "1011d8d0-fc02-11e9-b192-67cae1dda8ef", userName: "akb.m", email: "akb.m@test2.com", name: "Akbar", age: 26, sex: "Male" },
        { id: "1758a3d0-fc02-11e9-b192-67cae1dda8ef", userName: "ant.92", email: "antony@test3.com", name: "Antony", age: 28, sex: "Male" },
        { id: "20e51910-fc02-11e9-b192-67cae1dda8ef", userName: "jhanvi24", email: "jhan93@test1.com", name: "Jhanvi", age: 27, sex: "Female" }
    ],
    newUser: {
        userName: "",
        email: "",
        password:"",
        name: "",
        age:18,
        sex: "Male"
    },
    currentSession: []
}

const addUser = (state, action) => {
    const user = Map({
        id: action.id,
        userName: state.getIn(['newUser', 'userName']),
        name: state.getIn(['newUser', 'name']),
        password: state.getIn(['newUser', 'password']),
        email: state.getIn(['newUser', 'email']),
        age: state.getIn(['newUser', 'age']),
        sex: state.getIn(['newUser', 'sex'])
    });
    return updateIn(state, ['users'], val => val.push(user))
            .updateIn(['currentSession'], val => val.push(action.id))
            .set('newUser', fromJS({
                userName: "",
                email: "",
                password:"",
                name: "",
                age:18,
                sex: ""
            }));
}

const updateDetails = (state, action) => {
    return setIn(state, ['newUser', action.fieldName], action.data);
}

const userLists = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case 'ADD_USER':
            return addUser(state, action);
        case 'UPDATE_USERNAME':
            return updateDetails(state, action);
        case 'UPDATE_NAME':
            return updateDetails(state, action);
        case 'UPDATE_EMAIL':
            return updateDetails(state, action);
        case 'UPDATE_AGE':
            return updateDetails(state, action);
        case 'UPDATE_SEX':
            return updateDetails(state, action);
        case 'UPDATE_PASSWORD':
            return updateDetails(state, action);

        default:
            return state
    }
}


export default userLists;