import React from "react";


export default function BtnSmall(props){
    return (
        <>
           <a href={props.link}><button className ="btnSmall--style">{props.text}</button></a>
        </> 
    )
};


