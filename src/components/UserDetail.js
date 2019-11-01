import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

const UserDetail = ({ name, age, sex, userName, email, password, onDetailsUpdate, handleSubmit,history }) => {

    const handleSubmitClick = () => {
        history.push('/');
        handleSubmit();
    }

    return (
        <div style={{ paddingLeft: '20px', paddingTop: '20px', paddingRight: '20px' }}>
            {userName && email && password &&
                <Card>
                    <Card.Header as="h5">Complete Registration</Card.Header>
                    <Card.Body>
                        <Card.Title>User:{userName}</Card.Title>
                        <Card.Text>Email:{email}</Card.Text>
                        <Form>
                            <Form.Group controlId="Email">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={name} onChange={(ev) => onDetailsUpdate('UPDATE_NAME', ev, "name")} />
                            </Form.Group>
                            <Form.Group controlId="Username">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Age" value={age} onChange={(ev) => onDetailsUpdate('UPDATE_AGE', ev, "age")} />
                            </Form.Group>
                            <Form.Group controlId="Sex">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select" value={sex} onChange={(ev) => onDetailsUpdate('UPDATE_SEX', ev, "sex")} >
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    <Button variant="primary" onClick={() => handleSubmitClick()}>Submit</Button>
                    </Card.Body>
                </Card >
            }
            {(!userName || !email || !password) &&
                <Redirect to="/register"/>
            }
            
        </div>
    )

}

UserDetail.propTypes = {
    age: PropTypes.number,
    email: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func,
    history: ReactRouterPropTypes.history.isRequired,
    name: PropTypes.string,
    onDetailsUpdate: PropTypes.func,
    password: PropTypes.string.isRequired,
    sex: PropTypes.string,
    userName: PropTypes.string.isRequired
};

export default UserDetail;