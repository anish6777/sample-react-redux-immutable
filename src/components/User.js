import React from 'react';
import PropTypes from 'prop-types';

const User = ({ ind, name, userName, email, age, sex }) => (
    <tr>
        <td>{ind}</td>
        <td>{name}</td>
        <td>{userName}</td>
        <td>{email}</td>
        <td>{age}</td>
        <td>{sex}</td>
    </tr>
);

User.propTypes = {
    age: PropTypes.number,
    email: PropTypes.string,
    ind: PropTypes.number.isRequired,
    sex: PropTypes.string,
    userName: PropTypes.string
};

export default User;
