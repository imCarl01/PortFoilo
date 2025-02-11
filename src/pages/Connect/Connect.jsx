import NavBar from '../../components/NavBar/NavBar'
import './Connect.scss'
import {
  AccountCircle,
  Send,

  Instagram,
  Twitter,
  LinkedIn,
  GitHub,

} from "@mui/icons-material";

const Connect = () => {
  return (
    <div>
      <NavBar/>
      <div className="contact-section">
      <header className="header">
        <div className="header-icon">
          <AccountCircle fontSize="large" color="blue" />
        </div>
        <div className="header-text">
          <h2>Let's connect</h2>
          <p>I'm available for immediate employment or quick task.</p>
        </div>
      </header>
      <div className="content">
        <div className="form-container">
          <h3>Contact Form</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="What's your name?" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" placeholder="And your e-mail address..." required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" placeholder="A little gist about the job..." required></textarea>
            </div>
            <button type="submit" className="btn">
              Send <Send />
            </button>
          </form>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <ul>

            {/* <li>
              <Instagram className='icons'/> <a href="">Instagram</a>
            </li> */}
            <li>
              <Twitter className='icons'/> <a href="">Twitter</a>
            </li>
            <li>
              <LinkedIn className='icons'/> <a href="https://www.linkedin.com/in/carl-nwanyanwu-1963812b9/">LinkedIn</a>
            </li>
            <li>
              <GitHub className='icons'/> <a href="https://github.com/imCarl01">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Connect