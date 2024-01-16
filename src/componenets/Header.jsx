import React from "react"
import BtnSmall from "./buton"

export default function Header() {
    return (
        <nav className="navbar--container">
              <img src=".../photos/logo.png" alt="L2L Rebuild Comapny Logo"></img>   
                <h2>About Us</h2>
                <h2>Services</h2>
                <h2>Contact</h2>
            <BtnSmall text="Login" />
            <BtnSmall text="Sign Up" />  
        </nav>
    )
}