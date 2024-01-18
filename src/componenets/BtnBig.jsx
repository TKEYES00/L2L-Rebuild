import React from "react"
export default function BtnBig(props){
    return (
        <>
           <a href={props.link}><button className='main--bigButton'>{props.text}</button></a>
        </> 
    )
};