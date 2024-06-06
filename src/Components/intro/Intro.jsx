import React from 'react'
import './intro.css'
import Me from '../../images/picwish.png'

function Intro() {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Mike Shippy</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Full-Stack Software Engineer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className='i-title-item'>RESTful API Developer</div>
                    </div>
                </div>
                <p className="i-desc">
                I'm a software engineer with a proven track record of building and maintaining full-stack applications. 
                Proficient in JavaScript, PHP, Python, and relational databases with a solid understanding of RESTful API architecture. 
                Committed to continuous education and effectively collaborating with cross-functional teams to deliver innovative solutions. 
                I leverage previous experience in the hospitality industry to excel under pressure, engage in proficient team management, and thrive when faced with challenges requiring creativity and resourcefulness.
                </p>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img src={Me} alt='' className='i-img'/>
        </div>
    </div>
  )
}

export default Intro