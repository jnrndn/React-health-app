import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AssignmentInd, Home as HomeIcon, AddBox } from '@material-ui/icons';
import RegisterForm from '../components/register/register';

export default function Routes() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, selected: string) => {
        setValue(selected);
    };

    return (
        <Router>
            <div className="nav-panel">
                <BottomNavigation
                    value={ value }
                    onChange={ handleChange }
                    showLabels
                >
                    <BottomNavigationAction
                        component={ Link }
                        to="/"
                        label="Home"
                        value="Home"
                        icon={ <HomeIcon /> }
                    />
                    <BottomNavigationAction
                        component={ Link }
                        to="/register"
                        label="Register"
                        value="Register"
                        icon={ <AddBox /> }
                    />
                    <BottomNavigationAction
                        component={ Link }
                        to="/users"
                        label="Users"
                        value="users"
                        icon={ <AssignmentInd /> }
                    />
                </BottomNavigation>

                <Switch>
                    <Route path="/register">
                        <RegisterForm />
                    </Route>
                    <Route path="/users">
                        {/* <Users /> */ }
                    </Route>
                    <Route path="/">
                        {/* <Home /> */ }
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}