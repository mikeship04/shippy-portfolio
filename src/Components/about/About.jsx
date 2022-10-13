import React from 'react'
import './about.css'
import Cert from '../../images/FIS Cert.png'

function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img
                src="https://media-exp1.licdn.com/dms/image/C561BAQGpxRlo9gp3cQ/company-background_10000/0?e=2159024400&v=beta&t=TrelGvVGOofaPX-01588Ei8BJf0_8taYBiGFlk9zyME"
                alt=""
                className='a-img'></img>
            </div>
        </div>
        <div className="a-right">
            <h1 className='a.title'>About Me</h1>
            <p className='a-sub'>
                Developing innovative and modern web solutions.
            </p>
            <p className='a-desc'>
            Innovative software engineer with expertise building full stack applications using Ruby, Rails, SQL databases, Javascript, React, Recoil, while following RESTful API architecture and best practices.
            </p>
            <div className='a-award'>
                <img src={Cert} alt='certification' className='a-award-img'></img>
                <div className="a-awards-texts">
                    <h4 className="a-award-title">Software Engineering Graduate 2022</h4>
                    <p className="a-award-desc">15 Week Intensive // Full Stack Software Engineering Program.
                        - Front End: Javascript (ES6+), React.js
                        - Back End: Ruby, Ruby on Rails, SQL, PostgreSQL & Active Record</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About