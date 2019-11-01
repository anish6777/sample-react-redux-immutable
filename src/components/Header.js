import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Navbar,Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Header = ({ history,location }) => {

    const handleSubmitClick = (path) => {
        history.push(path);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >Technical Task</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link active={(location.pathname === '/')} onClick={() => handleSubmitClick('/')}>New Users</Nav.Link>
                    <Nav.Link active={(location.pathname === '/allusers')} onClick={() => handleSubmitClick('/allusers')}>All Users</Nav.Link>
                <Nav.Link active={(location.pathname === '/register')} onClick={() => handleSubmitClick('/register')}>Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            
    )

}

Header.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(Header);