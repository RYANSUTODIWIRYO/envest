import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { Login, Register } from "../../../pages"

class Body extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        
        )
    }
}

export default Body