import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { setLogin } from "../../store/action"
import "./register.css" 
import { Navbar } from "../../component/template"

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            name: "",
            role: "",
            password: "",
            rePassword: ""
        }
    }

    setValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onClickSignUpHandler = (event) => {
        event.preventDefault()
        const { email, name, role, password, rePassword } = this.state
        const { doLogin } = this.props

        if (email === "" || name === "" ||
            role === "" || password === "") {
                return alert("Mohon formulir di isi dengan lengkap")
            }

        if (password !== rePassword) {
            return alert("Password tidak sama")
        }

        // alert (email + name + role + password + rePassword)

        fetch("http://localhost:8080/envest/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                name,
                password,
                role
            })
        })
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                alert("Pendafatarn berhasil!")
                return doLogin(json)
            } 
            console.error(json.error)
            return alert(json.error)
        })
        .catch(err => console.error(err))

    }
    
    render() {
        return(
            <div className="register">
                <div className="navbar">
                    <div className="navbarContent">                        
                        <Navbar
                            linkTo="/login"
                            label="Login"
                        />
                        <Navbar
                            linkTo="/"
                            label="Home"
                        />
                    </div> 
                </div>
                <div className="container-wrapper registerContent">
                <form className="formRegister">
                        <div className="formRegisterContent" style={{marginBottom:"20px"}}>
                            Daftar
                        </div>
                        <div className="formRegisterContent">
                            {/* <label>Email</label> */}
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={(e) => this.setValue(e)}
                                required
                            />
                        </div>
                        <div className="formRegisterContent">
                            <input
                                name="name"
                                type="text"
                                placeholder="Nama"
                                onChange={(e) => this.setValue(e)}
                                required
                            />
                        </div>
                        <div className="formRegisterContent" style={{margin:"0 0 20px 0"}}>
                            <label style={{fontSize:"13px"}}>Daftar sebagai &nbsp;</label>
                            <select name="role" onChange={(e) => this.setValue(e)} required>
                                <option>-- Pilih --</option>
                                <option value="investor">Investor</option>
                                <option value="mitra">Mitra</option>
                            </select>
                        </div>
                        <div className="formRegisterContent">
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => this.setValue(e)}
                                required
                            />
                        </div>
                        <div className="formRegisterContent">
                            <input
                                name="rePassword"
                                type="password"
                                placeholder="Konfirmasi Password"
                                onChange={(e) => this.setValue(e)}
                                required
                            />
                        </div>
                        <div className="formRegisterContent">   
                            <button
                                onClick={this.onClickSignUpHandler}
                            >
                                Daftar
                            </button>
                        </div>
                        <div className="formRegisterContent">                                                        
                            <p style={{fontSize:"10px"}}>
                                Sudah punya akun? <Link to="/login" style={{color: "blue"}}>Login di sini</Link>
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


export default connect(null, mapDispatchToProps)(Register)