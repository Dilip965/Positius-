
// import './Styles/app.css';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Brand from './Components/brand.jsx';

import Services1 from './Components/services.jsx';
import Services2 from './Components/services2.jsx';
import Proposal from './Components/proposal.jsx';
import Case1 from './Components/Case1.jsx';
import Working1 from './Components/working1.jsx'
import Accordian  from './Components/accordian.jsx';
import Team1 from './Components/team1.jsx';
import Teammate  from './Components/Teammate.jsx';
import Contact_us from './Components/Contact_us.jsx';
import From from './Components/form.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
  
    <Navbar />

    <Hero/>
    <Brand/>
    <Services1/>
    <Services2/>

    <Proposal/>

    <Case1/>
   <Working1/>
   <Accordian/>
   <Team1/>
    <Teammate/>
    <Contact_us/>
    <From/>
       
    <Footer/>
    </>
    
  );
}

export default App;
