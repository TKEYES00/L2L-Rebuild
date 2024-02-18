import { useState } from 'react'
import React from "react"
import Nav from './componenets/Nav'
import './App.css'
import Footer from './componenets/footer'

import Main from './componenets/main'
import BtnSmall from './componenets/buton'


function App() {

  return (
    <>
    <body>
      <Nav />
      <div className='background-image'>
        <h1 className="main--tittle">Leverage<span id='numberColor'>2</span>Live <br></br>Rebuild  </h1>
         <div className='main--info'>
          <h2 className='slogan'> At Leverage2Live Rebuild, we offer services that cover both credit building and repair. </h2>
          <div className='creditEval'>
            <p>Sign up for a free credit evaluation today and gain insights into your credit health. Our experts are ready to assess your situation and guide you toward a brighter financial future.</p>
            <BtnSmall text="Free Credit Evaluation" link="https://www.disputeprocess.com/jsp/custom_form.jsp?tab_id=TDZGSkcvY0Q2KzQ0d0p1SDBpbGpVUT09&add_affiliate=0&cust_type=1&company_id=VDVUd1lKY3VlUTA3TGs2cDNUeUhIQT09&isLinkFromIframe=1&redirect_url=https://l2lrebuild.scorexer.com/Portal/meeting.jsp?id=dd17b259-8e8c-4a9d-af25-f86d408288e8" />
         </div>
         </div>
          <main className='main'>
            {/* <Main />  */}
          </main>
      </div>
      <Footer />
    </body>
  </>
  )
}

export default App
