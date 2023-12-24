import React from 'react'
import Careerdev from "../assets/Careerdev.jpg"
import { Image } from 'react-bootstrap'
import "../css/careerdev.css"

export default function CareerDev() {
  return (
    <>
    <Image src={ Careerdev} className='career-page-back'></Image>
    <div className='career-page-top'>
      <h1 className='career-page-top-head'>
Career Development Wing</h1>
      
    </div>
    </>
  )
}
