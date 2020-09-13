import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { Login, Register, Home } from "../../../pages"

class Body extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        
        )
    }
}

export default Body