import React from "react"
import BtnSmall from "./buton"
import "./nav.css"

export default function Nav() {
    return (
        <nav className="navbar--container">
                <img className="nav--logo" src="./photos/Header_logo.png" alt="L2L Rebuild Comapny Logo"></img>   
                <h2 className="nav--pages">About Us</h2>
                <h2 className="nav--pages">Services</h2>
                <h2 className="nav--pages">Contact</h2>
                <div className="nav--smallBtnContainer">
                    <BtnSmall  text="Client Portal" link="https://l2lrebuild.scorexer.com/Portal/login.jsp" />
                    <BtnSmall  text="Sign Up" link="https://www.disputeprocess.com/jsp/custom_form.jsp?tab_id=UWJqSGZ2OHU3Q1JSS0EwS05zRlJGdz09&cust_type=2&company_id=VDVUd1lKY3VlUTA3TGs2cDNUeUhIQT09&isLinkFromIframe=1&redirect_url="/> 
                </div> 
        </nav>
    )
}