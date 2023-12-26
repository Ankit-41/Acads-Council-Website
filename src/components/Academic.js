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

    <section className='acads-section-1'>
      <div className='acads-info'>
        <p>
        The UG/PG Academics wing takes up the responsibility of the
                  academics related work of the Academic and Career Council. It
                  acts as an interface between the institute policy makers and
                  the students on matters related to academia. The wing
                  endeavors to protect the students academic interests and is
                  the voice of the student body on this front.
        </p>
        <div className="dropdown1">
                  <button className="dropbtn1">Comprehensive Course Guide</button>
                  <div className="dropdown-content1">
                  <a href="#/">Link1</a>
                  <a href="#/">Link2</a>
                  <a href="#/">Link3</a>
                  <a href="#/">Link4</a>
                  <a href="#/">Link5</a>
                  <a href="#/">Link6</a>
                  </div>
                </div>
        <div className="dropdown2">
                  <button className="dropbtn2">Department Guides</button>
                  <div className="dropdown-content2">
                  <a href="#/">Link1</a>
                  <a href="#/">Link2</a>
                  <a href="#/">Link3</a>
                  <a href="#/">Link4</a>
                  <a href="#/">Link5</a>
                  <a href="#/">Link6</a>
                  </div>
        </div>
      </div>
    </section>

    <section className='acads-section-2'>
      <div className='acads-s2'>
        <div className='acads-s2-title'>
          <h2 className='h2-title'>Objectives</h2>
        </div>
        <div className="acads-s2-content">
              <ul>
                <li>
                  <p>
                    Helping the students to contact Institute bodies for
                    academics and related purposes
                  </p>
                </li>
                <li>
                  <p>
                    Assisting and Coordinating with students senate nominees to
                    Academic committees of the Institute.
                  </p>
                </li>
                <li>
                  <p>
                    Spreading importance about academic policies, rules &amp;
                    regulations, and changes in them (if any)
                  </p>
                </li>
                <li>
                  <p>
                    Gathering students opinion on matters of critical importance
                  </p>
                </li>
                <li>
                  <p>Conducting academic orientation sessions</p>
                </li>
              </ul>
              
            </div>
      </div>
    </section>

    <section className='acads-section-3'>
      <div className='acads-links'>
      <div className='acads-links-title'>
          <h2 className='h2-title'>Quick Links</h2>
        </div>
        <div className="acads-links-content">
        <a href="#/">
            <button className="link-btn">
              Link1
            </button>
          </a>
        <a href="#/">
            <button className="link-btn">
              Link2
            </button>
        </a>
        <a href="#/">
            <button className="link-btn">
              Link3
            </button>
        </a>
        <a href="#/">
            <button className="link-btn">
              Link4
            </button>
          </a>
          <a href="#/">
            <button className="link-btn">
              Link5
            </button>
          </a>
          <a href="#/">
            <button className="link-btn">
              Link6
            </button>
          </a>
          <a href="#/">
            <button className="link-btn">
              Link7
            </button>
          </a>
          <a href="#/">
            <button className="link-btn">
              Link8
            </button>
          </a>
            </div>
      </div>
    </section>
    </>

  )
}
