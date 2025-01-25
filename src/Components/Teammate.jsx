import React from "react";
import "../Styles/Teammate.css";


import john from "../assets/johansmith.png";
import social from "../assets/social.png";
import janeDoe from "../assets/jane_doe.png"; 
import michaelBrown from "../assets/mic.png"
import emilyJohnson from "../assets/emily.png"; 
import brianWilliams from "../assets/brian.png"; 
import sarahKim from "../assets/sarah.png"; 

function Teammate() {
  return (
    <>
      <div className="team-grid-container">
        {/* Card 1 */}
        <div className="team-grid-item">
          <div className="team-info-card">
            <img
              className="team-images-info-card"
              src={john}
              alt="John Smith"
            />
            <div className="team-header-section">
              <h4>John Smith</h4>
              <p>CEO and Founder</p>
            </div>
            <img
              className="team-logo-info-card"
              src={social}
              alt="Social Media Icon"
            />
            <hr />
          </div>
          <hr />
          <p>
            10+ years of experience in digital <br />
            marketing. Expertise in SEO,
            <br /> PPC, and content strategy
          </p>
        </div>

     
        <div className="team-grid-item">
          <div className="team-info-card">
            <img
              className="team-images-info-card"
              src={janeDoe}
              alt="Jane Doe"
            />
            <div className="team-header-section">
              <h4>Jane Doe</h4>
              <p>Director of Operations</p>
            </div>
            <img
              className="team-logo-info-card"
              src={social}
              alt="Social Media Icon"
            />
            <hr />
          </div>
          <hr />
          <p>
            7+ years of experience in project <br />
            management and team leadership. <br />
            Strong organizational and <br />
            communication skills
          </p>
        </div>

    
        <div className="team-grid-item">
          <div className="team-info-card">
            <img
              className="team-images-info-card"
              src={michaelBrown}
              alt="Michael Brown"
            />
            <div className="team-header-section">
              <h4>Michael Brown</h4>
              <p>Senior SEO Specialist</p>
            </div>
            <img
              className="team-logo-info-card"
              src={social}
              alt="Social Media Icon"
            />
            <hr />
          </div>
          <hr />
          <p>
            5+ years of experience in SEO and <br />
            content creation. Proficient in <br />
            keyword research and on-page <br />
            optimization
          </p>
        </div>

      
        <div className="team-grid-item">
          <div className="team-info-card">
            <img
              className="team-images-info-card"
              src={emilyJohnson}
              alt="Emily Johnson"
            />
            <div className="team-header-section">
              <h4>Emily Johnson</h4>
              <p>PPC Manager</p>
            </div>
            <img
              className="team-logo-info-card"
              src={social}
              alt="Social Media Icon"
            />
            <hr />
          </div>
          <hr />
          <p>
            3+ years of experience in paid <br />
            search advertising. Skilled in <br />
            campaign management and <br />
            performance analysis
          </p>
        </div>

      
        <div className="team-grid-item">
          <div className="team-info-card">
            <img
              className="team-images-info-card"
              src={brianWilliams}
              alt="Brian Williams"
            />
            <div className="team-header-section">
              <h4>Brian Williams</h4>
              <p>Social Media Specialist</p>
            </div>
            <img
              className="team-logo-info-card"
              src={social}
              alt="Social Media Icon"
            />
            <hr />
          </div>
          <hr />
          <p>
            4+ years of experience in social <br />
            media marketing. Proficient in <br />
            creating and scheduling content,
            <br />
            analyzing metrics, and building <br />
            engagement
          </p>
        </div>

     
        <div className="team-grid-item">
          <div className="team-info-card">
            <img
              className="team-images-info-card"
              src={sarahKim}
              alt="Sarah Kim"
            />
            <div className="team-header-section">
              <h4>Sarah Kim</h4>
              <p>Content Creator</p>
            </div>
            <img
              className="team-logo-info-card"
              src={social}
              alt="Social Media Icon"
            />
            <hr />
          </div>
          <hr />
          <p>
            10+ years of experience in digital <br />
            marketing. Expertise in SEO,
            <br /> PPC, and content strategy
          </p>
        </div>
      </div>
    </>
  );
}

export default Teammate;
