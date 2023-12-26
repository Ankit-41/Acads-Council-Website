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
    <section className='cd-section-1'>
      <div className='cd-info'>
      <p>
                  Formation of this wing of the Council with the mandate of
                  Career Development of students shall provide an extraordinary
                  boost in regard to Career Aspects. It would also allow to
                  bring all entities in the Gymkhana oriented towards various
                  sides of career development under a single umbrella
                  facilitating them and their collaborations. The wing will make
                  efforts to ensure that CDC realizes its vision at the earliest
                  possible and that it provides all the necessary support for
                  this purpose.
      </p>
        
      </div>
    </section>

    <section className='cd-section-2'>
      <div className='cd-s2'>
        <div className='cd-s2-title'>
          <h2 className='h2-title'>Objectives</h2>
        </div>
        <div className="cd-s2-content">
        <ul>
                <li>
                  <p>
                    Career Awareness - Conducting sessions for the same.
                  </p>
                </li>
                <li>
                  <p>Career Preparation tests</p>
                </li>
                <li>
                  <p>Career Counselling</p>
                </li>
              </ul>
              
            </div>
      </div>
    </section>

    <section className='cd-section-3'>
      <div className='cd-s3'>
      <div className='cd-s3-title'>
          <h2 className='h2-title'>Quant Preparation Material</h2>
        </div>
        <div className="cd-s3-content">
        <a href="#/">
            <button className="link-btn">
              Link1
            </button>
          </a>
        <p>To all those who are interested in applying for quant profiles in this upcoming placement season.
          <br></br>
          <br></br>
          It is generally a concern among students about what and how to prepare for test of companies
          recruiting for quant researcher or strategist or trading profiles as most of these companies 
          have just recently started visiting the campus. So, some of the materials and resources that 
          I found very useful have been uploaded on the link above. The starred files and folders are the 
          ones you can begin with. They are fundamental resources out of which many problems have directly
          been asked. I have also added comments on some of the files regarding their difficulty or way to 
          approach. You are not at all expected to complete the entire material. This is mostly for
          keeping up your momentum from now onwards till tests and interviews, so that you don’t get
           depleted of preparation material at any stage.
           <br></br>
           <br></br>
           If you find any inadequacy/irrelevance in these materials, please ping Prithesh Kumbhare (Y15,EE)
           with the suggestions. Hope this helps!
        </p>
            </div>
      </div>
    </section>

    <section className='cd-section-4'>
      <div className='cd-s4'>
      <div className='cd-s4-title'>
          <h2 className='h2-title'>Consulting Preparation Material</h2>
        </div>
        <div className="cd-s4-content">
        <a href="#/">
            <button className="link-btn">
              Link1
            </button>
          </a>
        <p>A one-stop solution for Consulting (Case Interviews) Preparation</p>
            </div>
      </div>
    </section>
    </>
  )
}
