import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';
import { Link } from 'react-router-dom';

export default(
    <Switch>
        <Link to='/' exact component={ Auth }></Link>
        <Link to='/dashboard' component={ Dashboard }></Link>
        <Link to='/new' component={ Form }></Link>
        <Link to='/post/:postid' component={ Post }></Link>
    </Switch>
)