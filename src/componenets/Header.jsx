import React from "react"
import BtnSmall from "./buton"

export default function Header() {
    return (
        <nav className="navbar--container">
                <img className="nav--logo" src="./photos/Header_logo.png" alt="L2L Rebuild Comapny Logo"></img>   
                <h2 className="nav--pages">About Us</h2>
                <h2 className="nav--pages">Services</h2>
                <h2 className="nav--pages">Contact</h2>
                <div className="nav--smallBtnContainer">
                    <BtnSmall text="Login" />
                    <BtnSmall text="Sign Up" /> 
                </div> 
        </nav>
    )
}