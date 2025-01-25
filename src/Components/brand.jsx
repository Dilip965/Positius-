import '../Styles/brand.css';
import amazon from  "../assets/amazon.png"
import dirbble from "../assets/dirbble.png"
import hubspot from "../assets/hubspot.png"
import notion from "../assets/notion.png"
import netflix from "../assets/netflix.png"
import zoom from "../assets/zoom.png"

function Brand(){

    return(

<>

 
<section class="brands">

    <div class="brand-logos">
      <img src={amazon} alt="Amazon"/>
      <img src={dirbble} alt="Dribbble"/>
      <img src={hubspot} alt="HubSpot"/>
      <img src={notion} alt="Notion"/>
      <img src={netflix} alt="Netflix"/>
      <img src={zoom} alt="Zoom" />
    </div>
  </section>


</>

    )
}

export default Brand;