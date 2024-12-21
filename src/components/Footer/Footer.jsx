import './Footer.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <div className='footerSection'>
        Created with  
        <span style={{color:"#25a9df"}}><FavoriteIcon/></span>  
        by Carl Uchenna
    </div>
  )
}

export default Footer