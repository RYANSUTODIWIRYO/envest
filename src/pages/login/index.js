import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { setLogin } from "../../store/action"
import { Navbar } from "../../component/template"
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

        if (email === "" || password === "") {
                return alert("Mohon formulir di isi dengan lengkap")
            }

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
                alert("Login berhasil")            
                return doLogin(json)
            } 
            console.log(json.error)
        })
        .catch(err => {
            console.error(err)
            alert("Kesalahan koneksi")
        })
    }

    render() {
        // let loadingLogo = "none"

        return(
            <div className="login">
                <div className="navbar">
                    <div className="navbarContent">                        
                        <Navbar
                            linkTo="/register"
                            label="Daftar"
                        />
                        <Navbar
                            linkTo="/"
                            label="Home"
                        />
                    </div> 
                </div>
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
                            <button onClick={this.onClickLoginHandler}>
                                Login
                            </button>
                        </div>
                        <div className="formLoginContent">                                                        
                            <p style={{fontSize:"10px"}}>
                                Belum punya akun? <Link to="/register" style={{color: "blue", marginLeft: "0px"}}>Daftar di sini</Link>
                            </p>
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