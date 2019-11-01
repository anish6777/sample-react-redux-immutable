import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AllUsersList from '../containers/AllUsersList';
import NewUsersList from '../containers/NewUsersList';
import NewUserDetails from '../containers/NewUserDetails';
import NewUserLogin from '../containers/NewUserLogin';

const Routes = () => (
        <Switch>
        <Route exact path='/' component={NewUsersList} />
        <Route path='/allusers' component={AllUsersList} />
        <Route path='/register' component={NewUserLogin} />
        <Route path='/completeregistration' component={NewUserDetails} />
        </Switch>
)

export default Routes