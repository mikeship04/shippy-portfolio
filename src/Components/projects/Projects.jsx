import React from 'react'
import './projects.css'

function Projects({img, link, name}) {
  return (
    <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <p className="p-text">{name}</p>
        </div>
        <a href={link} target='_blank' rel='noreferrer'>
            <img src={img} alt={name} className='p-img'>
            </img>
        </a>
    </div>
  )
}

export default Projects