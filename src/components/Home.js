import React from 'react'
import HomeImage from "../assets/home-image.jpg"
import { Image } from 'react-bootstrap'
import "../css/homepage.css"

export default function home() {
  return (
    
    <>
    <Image src={HomeImage} className='home-page-back'></Image>
    <div className='home-page-top'>
      <h1 className='home-page-top-head'>About</h1>
      <p>The Academics and Career Council of the Indian Institute of Technology, Kanpur is a council directly placed under the Student's Gymkhana, that aims to foster all needs related to academics and research for the campus dwellers</p>
    </div>

    
    
    
    </>
  )
}
