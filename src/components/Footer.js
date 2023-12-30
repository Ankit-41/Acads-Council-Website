import React from "react";
import './FooterStyles.css';

function footer() {
    return (
        <>
            <h1>Footer</h1>
            <div>
            <div className="foot-cont">
                <div className="foot-box" id="box1">

                    <img src="/logo.png" alt="acad-logo" />
                    <h3 className="footer-heading">Contact us</h3>
                    <ul>
                        <li><a href=""><i class="fa-solid fa-location-dot"></i>IIT Roorkee, Uttarakhand</a></li><hr />
                        <li><a href="mailto:sacgsec@admin.iitd.ac.in"><i class="fa-solid fa-envelope"></i>sacgsec@admin.iitd.ac.in</a></li><hr />
                        <li><a href="https://www.facebook.com/saciitdelhi/"><i class="fa-brands fa-facebook"></i>fb.com/saciitdelhi</a></li><hr />
                    </ul>
                    
                </div>

                <div className="foot-box" id="box2">
                    <h3 className="footer-heading">Constituent Bodies Acad Council</h3>
                    <ul>
                        <li><a href="">part1</a></li><hr />
                        <li><a href="">part1</a></li><hr />
                        <li><a href="">part1</a></li><hr />
                        <li><a href="">part1</a></li><hr />
                        <li><a href="">part1</a></li><hr />
                        <li><a href="">part1</a></li><hr />
                    </ul>
                </div>
                <div className="foot-box" id="box3">
                <h3 className="footer-heading">Services</h3>
                    <ul>
                        <li><a href="">Counselling</a></li><hr />
                        <li><a href="">Hospital</a></li><hr />
                        <li><a href="">CSC - Computer Services Center</a></li><hr />
                        <li><a href="">OCS - Office of Carrer Services</a></li><hr />
                        
                    </ul>
                </div>
                <div className="foot-box" id="box4">
                <h3 className="footer-heading">Links</h3>
                    <ul>
                        <li><a href="">Link1</a></li><hr />
                        <li><a href="">Link2</a></li><hr />
                        <li><a href="">Link3</a></li><hr />
                        <li><a href="">Link4</a></li><hr />
                        
                    </ul>
                    <h4><a href="">Scroll to top <i class="fa-solid fa-arrow-up"></i></a></h4>
                </div>
            </div>
            <div className="foot-bottom">
                <h6>Designed & Devloped by Acad Council</h6>
                <p>Copyright@Acad Council,IIT Roorkee,Uttrakhand,2023</p>
            </div>
            </div>
        </>
    )
}

export default footer;