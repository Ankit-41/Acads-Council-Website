import React from 'react'
import ResearchImage from "../assets/research-image.jpg"
import { Image } from 'react-bootstrap'
import "../css/research.css"

export default function Research() {
  return (
    <>
    <Image src={ResearchImage} className='research-page-back'></Image>
    <div className='research-page-top'>
      <h1 className='research-page-top-head'>Research Wing</h1>
      
    </div>

    <section className='res-section-1'>
      <div className='res-info'>
      <p>
      The Research Wing of the council aims at cultivating and promoting research interests in the student community.
      It aims to provide students the freedom and opportunities to work upon diverse areas of business, technology and existing
      industrial and national challenges as well as pursue their own ideas so as to become innovators and future leaders.
      </p>
      <a href="#/">
            <button className="link-btn">
              Link1
            </button>
      </a>
      </div>
    </section>

    <section className='res-section-2'>
      <div className='res-s2'>
        <div className='res-s2-title'>
          <h2 className='h2-title'>Objectives</h2>
        </div>
        <div className="res-s2-content">
        <ul>
                <li>
                  <p>
                  To increase awareness about the variety of research going on in the campus,
                   and promote research among the campus community. Specifically,
                  </p>
                </li>
                <li>
                  <p>Organizing the National Students Research Convention (NSRC)</p>
                </li>
                <li>
                  <p>Revival of PoWER (Promotion of Work Experience and Research)</p>
                </li>
                <li>
                  <p>Developing an online research portal (database)</p>
                </li>
              </ul>
              
            </div>
      </div>
    </section>

    </>
  )
}
