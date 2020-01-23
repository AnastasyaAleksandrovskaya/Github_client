import React, {useState} from 'react';
import Login from "../Login/Login";
import Header from "../Header/Header";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {AUTH_TOKEN} from "../../constants";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MainPage from "../MainPage/MainPage";
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();

    let [token, updateToken] = useState(localStorage.getItem(AUTH_TOKEN));

    const login = (newToken) => {
        localStorage.setItem(AUTH_TOKEN, newToken);
        updateToken(localStorage.getItem(AUTH_TOKEN));
    };

    const logout = () => {
        localStorage.removeItem(AUTH_TOKEN);
        updateToken(localStorage.getItem(AUTH_TOKEN));
    };

    return (
        <div className={classes.app}>
            <Header token={token} logout={logout}/>
            <Router>
                <Redirect from="/" to="home" />
                <Switch>
                    <Route path="/login">
                        <Login login={login}/>
                    </Route>
                    <PrivateRoute path="/home" token={token}>
                        <MainPage/>
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
