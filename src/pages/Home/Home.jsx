import NavBar from '../../components/NavBar/NavBar'
import './Home.scss'
import logo from './image/cake-monster-monsta.gif'
import Typical from 'react-typical'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.5 }}
    
    >
      <div className='homeS'>
      <NavBar/>

      <div className="me">
        <img src={logo} alt="logo"/>

        <div className="name">
          <h2>Carl Uchenna</h2>
          <p>
          <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'Frontend Engineer', 3000,
                'Website Developer', 3000,
                'Mobile Developer', 3000,
              ]}
            />
          </p>
        </div>
      </div>

      <div className="container">
          <div className="profileSettings">
        <div className="profile">
              <div className="ccc">
                <AccountBoxIcon className='ico'/>
                <h3>Profile</h3>
              </div>
              <hr className='rule' />
              
              <div className="bio">
                <p>Hi there! 👋 I'm Carl Uchenna — a passionate Frontend Engineer, Website Developer, and Mobile Developer! 🚀 I love turning ideas into stunning digital experiences 🌟 and creating apps that people love to use. 💻✨ Let's build something awesome together! 🙌</p>
              </div>
        </div>

        <div className="btn">
        <button><FileOpenIcon className='icon'/><a href="">View CV</a></button>
      </div>
      </div>

      <div className="littleBoxes">
        <div className="projectCompleted">
          <h1>10+</h1>
          Completed Projects
        </div>

        <div className="yearOfExperience">
          <h1>1+</h1>
          Years of Experience
        </div>

        <div className="clients">
          <h1>5+</h1>
          Happy clients
        </div>

        <div className="collaboration">
          <h1>1+</h1>
          Collaborations
        </div>
      </div>
    </div>
            
              <Link to="/about" style={{color:"#000", textDecoration:"none"}}className='about'>
                
                <h2>About </h2>
                <span style={{color:"#25a9df"}}><ArrowForwardIcon/></span>  
                
              </Link>

        <Footer/>
        
    </div>
    </motion.div>
    
  )
}

export default Home