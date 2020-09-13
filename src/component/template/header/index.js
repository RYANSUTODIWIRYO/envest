import React, { Component } from 'react'
import "./header.css"

import OJK from "../../../assets/image/OJK.png"
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return(
            <div className="header">
                <div className="container-wrapper headerContent">
                    <div className="headerLogo">
                        <Link to="/">    
                            <h1>Envest</h1>
                            <p>Solusi Investasi Anda</p>
                        </Link>
                    </div>
                    <div style={{display: "flex"}}>
                        <p style={{textAlign: "right", margin: "10px 2px 0 0", color: "black", fontSize: "12px"}}>Tidak<br/>diawasi<br/>oleh</p>
                        <img src={OJK} alt="logo" style={{width: "120px", height: "50px"}}/>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Header