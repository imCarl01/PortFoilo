import NavBar from '../../components/NavBar/NavBar'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Project.scss'
import modot from './image/modotInT.png'
import ship from './image/Ship.png'
import trading from './image/tradingOptions.png'
import Footer from '../../components/Footer/Footer'

const Project = () => {
  return (
    <div className="projectss">
        <div><NavBar/></div>
        
        <div className="myProject">
            <ProjectCard 
            image={modot}
            title="Modot Integrated Service"
            description="MODOT, a company offering tailored business solutions and training for the marine industry."
            demoLink="https://modotintegratedservices.com/"
            />

          <ProjectCard 
            image={ship}
            title="ShipDishr Logistic"
            description="This logistics website will allow customers to track their deliveries in real-time using a tracking ID."
            demoLink="https://www.shipdashr.com/"
          />

          <ProjectCard 
            image={trading}
            title="Crypto Website"
            description="This Crypto website that allow users to see charts,buy crypto from third parties, invest etc.PS: it is cloned as a personal project"
            demoLink="https://trading-options-cloned.vercel.app/"
          />
           <Footer/>
        </div>
       
    </div>
   
  )
}

export default Project