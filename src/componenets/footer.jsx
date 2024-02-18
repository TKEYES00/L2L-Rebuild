import React from "react";
import "./footer.css"

export default function Footer() {
    return (
        <footer> 
            <div>
                <h4>Contact Us</h4>
                <p>Phone: (801)-210-05772 </p>
                <p>Email:  Support@l2lRebuild.com</p>
            </div>
            <div>
                <a href="https://www.skool.com/leverage2live-community-7384?invite=6d2ea677e4a4426988ebaa7ae33926ea"><img className="social-icons" src="../photos/SkoolAppLogo.png" alt="Skool app Logo" /></a>
                <a href="https://www.instagram.com/alassaneaniang/"><img className="social-icons" src="../photos/ig-instagram-icon.svg" alt="Instagram Logo" /></a>
                <a href="https://www.youtube.com/@leverage2live"><img className="social-icons" src="../photos/youtube-color-icon2.png" alt="youtube Logo" /></a>
            </div>
            
        </footer>
    )
}