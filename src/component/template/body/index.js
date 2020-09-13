import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { Login, Register, Home, Admin, Investor, Mitra } from "../../../pages"
import { setLogout } from "../../../store/action"

class Body extends Component {
    render() {
        const { userOnLogin, isLogin, doLogout } = this.props

        return(          
            <Switch>
                <Route exact path="/">
                    {
                        (isLogin && userOnLogin.role === "admin") ? (
                            <Redirect to="/admin" />
                        ) : (isLogin && userOnLogin.role === "investor") ? (
                            <Redirect to="/investor" />
                        ) : (isLogin && userOnLogin.role === "mitra") ? (
                            <Redirect to="/mitra" />
                        ) : <Home />
                    }                    
                </Route>
                <Route path="/login">
                    {
                        (isLogin && userOnLogin.role === "admin") ? (
                            <Redirect to="/admin" />
                        ) : (isLogin && userOnLogin.role === "investor") ? (
                            <Redirect to="/investor" />
                        ) : (isLogin && userOnLogin.role === "mitra") ? (
                            <Redirect to="/mitra" />
                        ) : <Login/>
                    }                    
                </Route>
                <Route path="/register">
                    {
                        (isLogin && userOnLogin.role === "admin") ? (
                            <Redirect to="/admin" />
                        ) : (isLogin && userOnLogin.role === "investor") ? (
                            <Redirect to="/investor" />
                        ) : (isLogin && userOnLogin.role === "mitra") ? (
                            <Redirect to="/mitra" />
                        ) : <Register />
                    }       
                </Route>
                <Route path="/admin">
                    {
                        (isLogin && userOnLogin.role === "admin") ? (
                            <Admin
                                doLogout={doLogout}
                            />
                        ) : <Redirect to="/login"/>
                    }                    
                </Route>
                <Route path="/investor">
                    {
                        (isLogin && userOnLogin.role === "investor") ? (
                            <Investor
                                doLogout={doLogout}
                            />
                        ) : <Redirect to="/login"/>
                    }                    
                </Route>
                <Route path="/mitra">
                    {
                        (true) ? (
                        // (isLogin && userOnLogin.role === "mitra") ? (
                            <Mitra
                                doLogout={doLogout}
                            />
                        ) : <Redirect to="/login"/>
                    }                    
                </Route>
            </Switch>
        
        )
    }
}

const mapStateToProps = (state) => ({
    userOnLogin : state.authReducer.userOnLogin,
    isLogin : state.authReducer.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)