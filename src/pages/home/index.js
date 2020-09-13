import React, { Component } from 'react'
import { Navbar } from "../../component/template"

class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="navbar">
                    <div className="navbarContent">
                        <Navbar
                            linkTo="/login"
                            label="Login"
                        />
                        <Navbar
                            linkTo="/register"
                            label="Daftar"
                        />
                    </div> 
                </div>
                <div className="container-wrapper">                    
                    <div style={{textAlign: "center"}}>
                        <h1>Envest</h1>
                        <p>Solusi Investasi Anda</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home