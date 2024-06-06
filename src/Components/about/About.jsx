import React from 'react'
import './about.css'

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
            Prior to my career in software engineering I had 15 years in the hospitality management industry with successful track record working with diverse teams utilizing effective communication and a goal oriented mindset.
            Recognized for brand development and opening operation of Adams Table restaurant Downtown Phoenix. 
            Dedicated professional with a host of different job responsibilities and multiple promotions with positions focusing on driving sales, inventory management, scheduling, technical support for front and back of house systems.
            </p>
            <div className='a-award'>
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