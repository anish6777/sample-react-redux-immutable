const uuidv1 = require('uuid/v1');

export const updateDetails = (type, data, fieldName) => ({
    type,
    data,
    fieldName
});

export const addUser = () => ({
    type: 'ADD_USER',
    id: uuidv1()
});