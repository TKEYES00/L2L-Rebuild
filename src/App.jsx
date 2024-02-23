import { useState } from 'react'
import React from "react"
import Nav from './componenets/Nav'
import './App.css'
import Footer from './componenets/footer'
import CreditScoreAnimation from './componenets/CreditScore'
import Main from './componenets/main'
import BtnSmall from './componenets/buton'


function App() {

  return (
    <>
     <Nav />
      <body>
      <div className='background-image'> 
        <Main />
         </div>
         <div className='costOfCredit'>

         </div>
          <div className='testimony'>
              <iframe width="700" height="411" src="https://www.youtube.com/embed/EBUVxdrUZCM?si=IYFNd_gDNVdc3g0t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='creditEval'>
              <p>Sign up for a free credit evaluation today and gain insights into your credit health. Our experts are ready to assess your situation and guide you toward a brighter financial future.</p>
              <BtnSmall text="Free Credit Evaluation" link="https://www.disputeprocess.com/jsp/custom_form.jsp?tab_id=TDZGSkcvY0Q2KzQ0d0p1SDBpbGpVUT09&add_affiliate=0&cust_type=1&company_id=VDVUd1lKY3VlUTA3TGs2cDNUeUhIQT09&isLinkFromIframe=1&redirect_url=https://l2lrebuild.scorexer.com/Portal/meeting.jsp?id=dd17b259-8e8c-4a9d-af25-f86d408288e8" />
            </div>
         </div>
      
            {/* <Main />  */}
          
      <Footer />
    </body>
  </>
  )
}

export default App
