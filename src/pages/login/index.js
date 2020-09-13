import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { setLogin } from "../../store/action"
import "./login.css"

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    setValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onClickLoginHandler = (event) => {
        event.preventDefault()
        const { email, password } = this.state
        const { doLogin } = this.props

        fetch("http://localhost:8080/envest/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                return doLogin(json)
            } 
            console.log(json.error)
        })
        .catch(err => console.error(err))
    }

    render() {
        return(
            <div className="login">
                <div className="container-wrapper loginContent">
                    <form className="formLogin">
                        <div className="formLoginContent" style={{marginBottom:"20px"}}>
                            Login
                        </div>
                        <div className="formLoginContent">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={(e) => this.setValue(e)}
                                required
                            />
                        </div>
                        <div className="formLoginContent">
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => this.setValue(e)}
                                required
                            />
                        </div>
                        <div className="formLoginContent">   
                            <button
                                onClick={this.onClickLoginHandler}
                            >
                                Login
                            </button>
                        </div>
                        <div className="formLoginContent">
                            <Link to="/register">                            
                                <p style={{fontSize:"10px"}}>
                                    Daftar di sini
                                </p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (user) => dispatch(setLogin(user))
})


export default connect(null, mapDispatchToProps)(Login)