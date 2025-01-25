import React from "react";
import "../Styles/services2.css";

// Importing images from the assets folder
import learnMoreImg from "../assets/learnmore.png";
import webSearchImg from "../assets/websearch.png";
import payPerClickImg from "../assets/payperclick.png";
import socialMediaImg from "../assets/Socialmediamarketing.png";
import emailMarketingImg from "../assets/Email marketing.png";
import contentCreationImg from "../assets/contentcreation.png";
import analyticsTrackingImg from "../assets/analysisandtracking.png";

function Service2() {
  return (
    <>
      <div className="grid-container">
        {/* Card 1 */}
        <div className="first card one">
          <div className="content">
            <h1 className="search">Search Engine Optimization</h1>
            <a href="#">
              <img src={learnMoreImg} alt="Learn More" />
              Learn More
            </a>
          </div>
          <img className="images" src={webSearchImg} alt="Web Search" />
        </div>

        {/* Card 2 */}
        <div className="first card two">
          <div className="content">
            <h1 className="pay">Pay Per Click Advertising</h1>
            <a href="#">
              <img src={learnMoreImg} alt="Learn More" />
              Learn More
            </a>
          </div>
          <img className="images" src={payPerClickImg} alt="Pay Per Click" />
        </div>

        {/* Card 3 */}
        <div className="first card three">
          <div className="content">
            <h1 className="social">Social Media Marketing</h1>
            <a href="#">
              <img src={learnMoreImg} alt="Learn More" />
              Learn More
            </a>
          </div>
          <img
            className="images"
            src={socialMediaImg}
            alt="Social Media Marketing"
          />
        </div>

        {/* Card 4 */}
        <div className="first card four">
          <div className="content">
            <h1 className="email">Email Marketing</h1>
            <a href="#">
              <img src={learnMoreImg} alt="Learn More" />
              Learn More
            </a>
          </div>
          <img
            className="first images"
            src={emailMarketingImg}
            alt="Email Marketing"
          />
        </div>

        {/* Card 5 */}
        <div className="first card five">
          <div className="first content">
            <h1>Content Creation</h1>
            <a href="#">
              <img src={learnMoreImg} alt="Learn More" />
              Learn More
            </a>
          </div>
          <img
            className="first images"
            src={contentCreationImg}
            alt="Content Creation"
          />
        </div>

        {/* Card 6 */}
        <div className="first card six">
          <div className="content">
            <h1 className="Analytics">Analytics and Tracking</h1>
            <a href="#">
              <img
                className="something"
                src={learnMoreImg}
                alt="Learn More"
              />
              <span className="manmade">Learn More</span>
            </a>
          </div>
          <img
            className="images"
            src={analyticsTrackingImg}
            alt="Analytics and Tracking"
          />
        </div>
      </div>
    </>
  );
}

export default Service2;
