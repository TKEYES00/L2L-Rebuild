import React from "react"
import BtnBig from "./BtnBig"
import CreditAnimation from "./CreditScore"
import BtnSmall from "./buton"
import "./main.css"
export default function Main(){
return (
    <div className="main--container">
        <div className='tittleSection'>
            <div className='main-left'>
                <h1 className="main--tittle">Leverage<span id='numberColor'>2</span>Live <br></br>Rebuild  </h1>
                <h2 className='slogan'> We offer services that cover both credit building and repair. </h2>
                <BtnSmall text="Get your free credit evaluation today!" link="https://www.disputeprocess.com/jsp/custom_form.jsp?tab_id=TDZGSkcvY0Q2KzQ0d0p1SDBpbGpVUT09&add_affiliate=0&cust_type=1&company_id=VDVUd1lKY3VlUTA3TGs2cDNUeUhIQT09&isLinkFromIframe=1&redirect_url=https://l2lrebuild.scorexer.com/Portal/meeting.jsp?id=dd17b259-8e8c-4a9d-af25-f86d408288e8"/>
            </div>
            <div className="main--creditAnimation">
                <CreditAnimation options= "default options" />
            </div>
        </div>

    
    </div>
)
}




