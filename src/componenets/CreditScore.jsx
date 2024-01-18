import React from "react";
import Lottie from 'react-lottie';
import CreditAnimation from "../creditAnimation.json";

export default function CreditScoreAnimation(){
 
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: CreditAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      
      return (
        <Lottie options={defaultOptions} />
      )
      
}