import "../Styles/Hero.css";
import illu from "../assets/Illustration.png"

function Hero(){

    return(
        <>
        
        <main class="hero">
    <div class="hero-content">
      <h1>Navigating the digital landscape for success</h1>
      <p>
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <button class="consult-btn">Book a Consultation</button>
    </div>
    <div class="hero-image">
      <img src={illu} alt="Digital Marketing Illustration"/>
    </div>
  </main>
        </>
    )
}
export default Hero;