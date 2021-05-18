// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import "./style.css"

const AboutPage = () => {
    return (
        <div className="container mt-sm-5 mt-4">
            <div className="row p-2">
                <div className="col-sm-10 ml-sm-4 border-bottom border-dark">
                    <h1 className="font-weight-light">About Me</h1>
                </div>
            </div>
            <div className="row mt-3">
            <div className="col-sm-10 ml-sm-4">
                <img src="Assets/ProfilePic.jpg" alt="Grant Cawley" height="200" width="200"
                    className="float-left mr-4 img-fluid" />
                <p>Grant Cawley is a student currently learning full stack software development through Washington
                    University Coding Boot Camp. He graduated from Saint Louis University in the Spring of 2018 with a
                    Bachelor of Science degree in Psychology, and Bachelor of Arts degree in Spanish Language and
                    Literature. He is currently located in Saint Louis, Missouri, and has completed a number of coding
                    projects through the Washington University Coding Boot Camp program. Grant was most recently
                    employed by Varsity Tutors in Saint Louis as a Tutor Engagement Specialist, a customer service role
                    working closely with contracted tutors and clients.</p>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-sm-10 ml-sm-4">
                <h4 className="font-weight-light">Linkedin: <a href="https://www.linkedin.com/in/grant-cawley-89249415b"
                        target="_blank">Grant Cawley</a></h4>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-10 ml-sm-4">
                <h4 className="font-weight-light">GitHub: <a href="https://github.com/cawleygl" target="_blank">cawleygl</a>
                </h4>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-10 ml-sm-4">
                <h4 className="font-weight-light">Email: <a href="mailto:grantlcawley@gmail.com"
                        target="_blank">grantlcawley@gmail.com</a></h4>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-sm-10 ml-sm-4">
                <h4 className="font-weight-light">Resume: <a href="Assets/Grant Cawley - Resume.pdf" download
                        target="_blank">Grant Cawley - Resume.pdf</a></h4>
            </div>
        </div>


        </div>
    )
}

export default AboutPage
