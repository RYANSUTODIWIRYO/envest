import React, { Component } from 'react'
import { Navbar } from "../../component/template"

class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="container-wrapper">
                    <div className="navbar">
                        <Navbar
                            linkTo="login"
                            label="Login"
                        />
                        <Navbar
                            linkTo="register"
                            label="Daftar"
                        />
                    </div>
                    <div>
                        Home
                    </div>
                </div>
            </div>
        )
    }
}

export default Home