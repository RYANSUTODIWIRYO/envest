import React, { Component } from 'react'
import "./header.css"

import OJK from "../../../assets/image/OJK.png"

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="container-wrapper headerContent">
                    <div className="headerLogo">
                        <h1>Envest</h1>
                        <p>Solusi Investasi Anda</p>
                    </div>
                    <div style={{display: "flex"}}>
                        <p style={{textAlign: "right", margin: "10px 2px 0 0", color: "black", fontSize: "12px"}}>Tidak<br/>diawasi<br/>oleh</p>
                        <img src={OJK} style={{width: "120px", height: "50px"}}/>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Header