import React from 'react'
import AcademicImage from "../assets/academic-image.jpg"
import { Image } from 'react-bootstrap'
import "../css/academic.css"

export default function Academic() {
  return (
    <>
    <Image src={AcademicImage} className='academic-page-back'></Image>
    <div className='academic-page-top'>
      <h1 className='academic-page-top-head'>
UG/PG Academics Wing</h1>
      
    </div>
    </>

  )
}
