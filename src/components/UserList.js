import React from 'react';
import PropTypes from 'prop-types';
import { Table, Card } from 'react-bootstrap';

import User from './User';

const UserList = ({ users,type }) => {
    return (
        <div style={{ paddingLeft: '20px', paddingTop: '20px', paddingRight: '20px' }}>
            <Card >
                <Card.Header as="h5">{type} Users</Card.Header>
                <Card.Body>
                    {users.length > 0 &&
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Sex</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => (
                                        <User
                                            key={user.id}
                                            {...user}
                                            ind={i}
                                        />
                                    ))
                                }
                            </tbody>
                        </Table>
                    }
                    {users.length === 0 &&
                        <span>No users to show</span>
                    }

                </Card.Body>
            </Card>
        </div>

    );

};

UserList.propTypes = {
    type: PropTypes.string,
    users: PropTypes.array
};

export default UserList;