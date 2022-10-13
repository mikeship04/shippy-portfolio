import React, { useContext } from 'react'
import { ThemeContext } from '../../context'
import './darkmode.css'

function DarkMode() {
  const theme = useContext(ThemeContext)

  const handleClick = () =>{
    theme.dispatch({type:"TOGGLE"})
  }
  
  return (
    <div className='t'>
      <img src="https://ecdn.teacherspayteachers.com/thumbitem/Sun-Clipart-4942824-1571093682/original-4942824-1.jpg" alt="sun" className="t-icon" />
      <img src="https://i.pinimg.com/originals/43/7f/48/437f48711d39679799a19cd59f0ad4ff.jpg" alt="moon" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? 0 : 50}}></div>
    </div>
  )
}

export default DarkMode