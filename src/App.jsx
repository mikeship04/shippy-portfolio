import Intro from "./Components/intro/Intro";
import About from "./Components/about/About"
import ProjectList from "./Components/projectList/ProjectList";
import Contact from "./Components/contactInfo/Contact";
import DarkMode from "./Components/Darkmode/DarkMode";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return <div 
  style={{
    backgroundColor: darkMode ? "#222" : "white", 
    color: darkMode ? 'white' : '#222'}}>
    <DarkMode />
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
    </div>;
};

export default App;