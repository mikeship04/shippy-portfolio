import React from 'react'
import './projectlist.css'
import Projects from '../projects/Projects'
import {projectInfo} from '../../projectinfo'

function ProjectList() {
  return (
    <div className='p1'>
        <div className="p1-texts">
            <h1 className="p1-title">Personal Projects</h1>
            <p className="p1-desc">These are some of the projects I've created and some examples of leetcode problems solved in various languages. You will also find a link direct to my github repository.</p>
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