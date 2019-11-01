import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Form, Button, Card } from 'react-bootstrap';

const UserLogin = ({ userName, email, password, onDetailsUpdate, history }) => {

    const onNext = () => {
        history.push('/completeregistration')
    }

    return (
        <div style={{ paddingLeft: '20px', paddingTop: '20px', paddingRight: '20px'}}>
            <Card >
                <Card.Header as="h5">User Registraion</Card.Header>
                <Card.Body>
                        <Form>
                            <Form.Group controlId="Email">
                                <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" isInvalid={!email} value={email} onChange={(ev) => onDetailsUpdate('UPDATE_EMAIL', ev, "email")} />
                            <Form.Control.Feedback type='invalid'>Please provide email</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="Username">
                                <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" value={userName} isInvalid={!userName}  onChange={(ev) => onDetailsUpdate('UPDATE_USERNAME', ev, "userName")} />
                                <Form.Control.Feedback type="invalid">Please provide username</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="Password">
                                <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} isInvalid={!password}  onChange={(ev) => onDetailsUpdate('UPDATE_PASSWORD', ev, "password")} />
                                <Form.Control.Feedback type="invalid">Please provide password</Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                    {email && userName && password &&
                        <Button variant="primary" disabled={!email || !userName || !password} onClick={() => onNext()}>Next</Button>
                    }
                </Card.Body>
                </Card>
        </div>
    )

}

UserLogin.propTypes = {
    email: PropTypes.string,
    history: ReactRouterPropTypes.history.isRequired,
    onDetailsUpdate: PropTypes.func,
    password: PropTypes.string,
    userName: PropTypes.string
};

export default UserLogin;