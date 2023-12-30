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

    <section className='ir-section-1'>
      <div className='ir-info'>
      <p>
      The International Relations(IR) wing of Academics and Career Council is a student organisation dedicated
      to work in close association with the Dean, International Relations(DoIR) and the Office of International Relations(OIR),
      IIT Kanpur to improve collaborations of the Institute and its foreign counterparts . It also acts as a complementary link
      between the student community and the office.
      </p>
        
      </div>
    </section>

    <section className='ir-section-2'>
      <div className='ir-s2'>
        <div className='ir-s2-title'>
          <h2 className='h2-title'>Objectives</h2>
        </div>
        <div className="ir-s2-content">
        <p>The International Relations wing shall work along with OIR (Office of International Relations) towards
           improving the relations of IITK with its international counterparts, and hence promoting Exchange programmes,
           Internships and Career opportunities in academia.</p>
              
            </div>
      </div>
    </section>

    <section className='ir-section-3'>
      <div className='ir-s3'>
      <div className='ir-s3-title'>
          <h2 className='h2-title'>Grads</h2>
        </div>
        <div className="ir-s3-content">
        <p>Graduate Research Application Directory
        </p>
        <a href="#/">
            <button className="link-btn">
              Link1
            </button>
          </a>
            </div>
      </div>
    </section>
    </>
  )
}
