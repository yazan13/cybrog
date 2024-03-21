import './Hero.css'
import {PrimaryButton} from '../../components/index'
const Hero = () => {
  return (
    <div className ="hero-main" >
      <div className ="hero-text">
        <h6 className="hero-subtitle">Welcome To Cyborg</h6>
        <h4 className="hero-title"><em>Browse</em>Our Popuar Game Hero</h4>
        <PrimaryButton>Browsr Now</PrimaryButton>
        {/* <div className= "main-button">
            <a href="browse.html">Browsr Now</a>
        </div> */}
      </div>
    </div>
  )
}

export default Hero
