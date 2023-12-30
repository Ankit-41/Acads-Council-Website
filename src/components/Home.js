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
      <div className='home-content'>
        {/* <div className='row'> */}
          <div className='goals-title'>
            <h1 className='goals-h'>Goals</h1>
          </div>
        
        <div className='goals-content'>
          <div className='goals-col'>
            <h4>UG-PG Academics</h4>
            <p>
              The UG/PG Academics Wing takes up the responsibility of the
              academics related work of the Academic and Career Council. It acts
              as an interface between the institute policy makers and the
              students on matters related to academia.
            </p>
          </div>
          <div className='goals-col'>
          <h4>Research</h4>
            <p>
            The Research Wing of the council aims at cultivating and promoting
              research interests in the student community, by providing the
              freedom and opportunities to work upon diverse areas of research.
            </p>
          </div>
          <div className='goals-col'>
          <h4>International Relations</h4>
            <p>
            The International Relations Wing works in close association with
              the Office of International Relations (OIR), IIT Kanpur to improve
              collaborations of the Institute and its foreign counterparts.
            </p>
          </div>
          <div className='goals-col'>
          <h4>Career Development</h4>
            <p>
              The Career Development Wing of the Council, with the mandate of
              Career Development of students, shall provide an extraordinary
              boost in regard to Career Aspects.
            </p>
          </div>
        </div>
      </div>



    </>
  )
}
