import React from 'react'
import Irelations from "../assets/Irelations.jpg"
import { Image } from 'react-bootstrap'
import "../css/irelations.css"


export default function IRelaions() {
  return (
    <>
    <Image src={Irelations} className='irelations-page-back'></Image>
    <div className='irelations-page-top'>
      <h1 className='irelations-page-top-head'>
International Relations</h1>
      
    </div>
    </>
  )
}
