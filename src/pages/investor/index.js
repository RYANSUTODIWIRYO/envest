import React, { Component } from 'react'
import { Navbar } from "../../component/template"

class Investor extends Component {
    render() {
        return(
            <div className="investor">
                <div className="navbar">
                    <div className="navbarContent">
                        <Navbar
                            linkTo=""
                            label="Logout"                            
                        >
                            {onclick=this.props.doLogout}
                        </Navbar>
                        <Navbar
                            linkTo=""
                            label="Verikfikasi"
                        />
                        <Navbar
                            linkTo=""
                            label="Investasi"
                        />
                    </div> 
                </div>
                <div className="container-wrapper">
                    <div style={{textAlign: "center"}}>
                        <h1>Envest</h1>
                        <p style={{marginTop:"-20px"}}>Solusi Investasi Anda</p>
                        <h1>Selamat Datang, Investor</h1>
                    </div>   
                </div>
            </div>
        )
    }
}

export default Investor