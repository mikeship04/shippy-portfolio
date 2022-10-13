import React from 'react'
import './projectlist.css'
import Projects from '../projects/Projects'
import {projectInfo} from '../../projectinfo'

function ProjectList() {
  return (
    <div className='p1'>
        <div className="p1-texts">
            <h1 className="p1-title">Personal Projects</h1>
            <p className="p1-desc">These are projects I've created</p>
        </div>
        <div className="p1-list">
            {projectInfo.map((item) => (
                <Projects key={item.id} img={item.img} link={item.link} name={item.name}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectList