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
                    I am a hospitality manger turned software engineer.  
                    With years of experience of customer
                    facing interaction, I bring a passion for modern web-design, 
                    UI/UX, and creating Full-Stack applications.
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