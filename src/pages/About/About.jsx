import NavBar from '../../components/NavBar/NavBar'
import './About.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../../components/Footer/Footer';
import TerminalIcon from '@mui/icons-material/Terminal';
import {Link} from 'react-router-dom'
import image1 from './Image/html-DlTsk8i9.png'
import image2 from './Image/css-DDj4i_7e.png'
import image3 from './Image/js-C_-PicVu.png'
import image4 from './Image/atom-DsFviqE6.png'
import image5 from './Image/images__1_-removebg-preview.png'
import image6 from './Image/download.svg'
import image7 from './Image/MongoDB-Emblem-removebg-preview.png'
import image8 from './Image/images__2_-removebg-preview.png'
import image9 from './Image/firebase-Bmeoes60.png'
import image10 from './Image/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail-removebg-preview.png'
import image11 from './Image/download (1).png'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    >
       <div className='aboutS'>
      <NavBar/>

      <div className="me">
        <AccountCircleIcon className='myProfile'/>

        <div className="name">
          <h2>About Me</h2>
          <p>
              Little gist about me🤭
          </p>
        </div>
      </div>

      <div className="container">
          <div className="profileSettings">
        <div className="profile">
              <div className="ccc">
                <SubtitlesIcon className='ico'/>
                <h3>The Gist</h3>
              </div>
              <hr className='rule' />
              
              <div className="bio">
                <p>👋 Hello, I'm Carl Uchenna, a passionate and dedicated developer with over a year of experience in building responsive websites 🌐 and engaging mobile applications 📱.</p>

                <p>🚀 My expertise includes HTML, CSS, JavaScript, React, and React Native, enabling me to create seamless and user-friendly digital experiences. I specialize in turning ideas 💡 into functional and visually appealing solutions.

                  💻 With a strong focus on best practices, I stay updated with modern technologies to deliver top-notch results.</p>

                <p>🎓 Education: B.Eng. in Computer Engineering (Final Year student at Rivers State University, Nigeria).</p>
              </div>
        </div>

        <div className="btn">
          <button><a href="">Let's Connect</a><HandshakeIcon className='icon'/></button>
        </div>
        
      </div>


      <div className="techStack">
          <div className="stack">
            <TerminalIcon/>
            <h3>Skills & Tech Stacks</h3>
          </div>
          <hr className='rule' />

          <div className="skils">
            <div className="html">
              <img src={image1} alt="" style={{width:50,height:50}}/>
              <h3>Html</h3>
            </div>
            <div className="html">
              <img src={image2} alt="" style={{width:50,height:50}}/>
              <h3>Css</h3>
            </div>
            <div className="html">
              <img src={image5} alt="" style={{width:100,height:50}}/>
              <h3>Sass</h3>
            </div>
            <div className="html">
              <img src={image3} alt="" style={{width:50,height:50}}/>
              <h3>JavaScript</h3>
            </div>
            <div className="html">
              <img src={image4} alt="" style={{width:50,height:50}}/>
              <h3>ReactJs</h3>
            </div>
            <div className="html">
              <img src={image10} alt="" style={{width:50,height:50}}/>
              <h3>React Native</h3>
            </div>
            <div className="html">
              <img src={image11} alt="" style={{width:50,height:50}}/>
              <h3>TypeScript</h3>
            </div>

            <div className="html">
              <img src={image9} alt="" style={{width:50,height:50}}/>
              <h3>Firebase</h3>
            </div>
            <div className="html">
              <img src={image6} alt="" style={{width:50,height:50}}/>
              <h3>Node Js</h3>
            </div>
            <div className="html">
              <img src={image7} alt="" style={{width:50,height:50}}/>
              <h3>MonogoDb</h3>
            </div>
            <div className="html">
              <img src={image8} alt="" style={{width:50,height:50}}/>
              <h3>Expo</h3>
            </div>



          </div>


      </div>


    </div>
            
              <Link to="/project" style={{color:"#000", textDecoration:"none"}}className='about'>
                
                <h2>Project</h2>
                <span style={{color:"#25a9df"}}><ArrowForwardIcon/></span>  
                
              </Link>

        <Footer/>
    </div>
    </motion.div>
   
  )
}

export default About