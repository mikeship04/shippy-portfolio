import React, { useRef, useState } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef()
    const [done, setDone] = useState(false)

    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm(
            'service_utmlh8o', 
            'template_dnfmrm9', 
            form.current, 
            'roB7kGix8CEFlbnci')
        .then((result) => {
            console.log(result.text)
            setDone(true)
        }, (error) => {
            console.log(error.text)
        })
        
    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
            <h1 className="c-title">Let's discuss your project needs</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img
                    src='https://thumbs.dreamstime.com/b/hands-smartphone-dialing-mobile-touch-screen-phone-numbers-pad-business-hand-businessman-cellphone-dial-connection-169155320.jpg'
                    alt=''
                    className='c-icon'
                    />
                    480-516-2916
                </div>
                <div className="c-info-item">
                    <img
                    src='https://i.etsystatic.com/16458179/r/il/122dd0/2744903306/il_570xN.2744903306_s4xk.jpg'
                    alt=''
                    className='c-icon'
                    />
                    shiprektcodes@gmail.com
                </div> 
                <div className="c-info-item">
                    <img
                    src='data:image/png;base64,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'
                    alt=''
                    className='c-icon'
                    />
                    Phoenix, Arizona
                </div>  
            </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b>  Get in touch, I'm always available for freelancing if the right project comes along.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button type="submit">Submit</button>
                    {done && "Thank you, we will be in touch with you shortly!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact