import React from 'react'
import ResearchImage from "../assets/research-image.jpg"
import { Image } from 'react-bootstrap'
import "../css/research.css"

export default function Research() {
  return (
    <>
    <Image src={ResearchImage} className='research-page-back'></Image>
    <div className='research-page-top'>
      <h1 className='research-page-top-head'>
Research Wing</h1>
      
    </div>
    </>
  )
}
