import React from "react"
import BtnBig from "./BtnBig"
import CreditAnimation from "./CreditScore"

export default function Main(){
return (
    <div className="main--container">
        <div>
            <div className="main--info">
            <h3>This is the text for the main section </h3>
            </div>

            <div className="main--buttonContainer">
            <BtnBig text="Free Consultation"/>
            <BtnBig text="Contact Us"/>
            </div>
            <div className="main--socialContainer">
            <img className="social-icons" src="../photos/facebook-round-color-icon.svg" alt="Facebook Logo" />
            <img className="social-icons" src="../photos/ig-instagram-icon.svg" alt="Instagram Logo" />
            <img className="social-icons" src="../photos/youtube-color-icon2.png" alt="youtube Logo" />
            </div>
        </div>

    <div className="main--creditAnimation">
    <CreditAnimation options= "default options"/>
    </div>
    </div>
)
}




