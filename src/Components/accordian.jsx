
import "../Styles/Accordian.css"
import "../script/Accordian.js"


function Accordian(){

    return(
  
<div class="accordion-container">
  <div class="accordion-item active">
    <div class="accordion-header">
      <span class="accordion-number">01</span>
      <span class="accordion-title">Consultation</span>
      <button class="accordion-toggle">-</button>
    </div>
    <div class="accordion-content">
      <p>
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
      </p>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">
      <span class="accordion-number">02</span>
      <span class="accordion-title">Research and Strategy Development</span>
      <button class="accordion-toggle">+</button>
    </div>
    <div class="accordion-content">
      <p>
        Our team conducts in-depth research to understand market trends and develops a customized strategy to align with your business goals.
      </p>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">
      <span class="accordion-number">03</span>
      <span class="accordion-title">Implementation</span>
      <button class="accordion-toggle">+</button>
    </div>
    <div class="accordion-content">
      <p>
        We implement the strategies with precision, ensuring all aspects of your business requirements are met effectively and on time.
      </p>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">
      <span class="accordion-number">04</span>
      <span class="accordion-title">Monitoring and Optimization</span>
      <button class="accordion-toggle">+</button>
    </div>
    <div class="accordion-content">
      <p>
        Continuous monitoring helps us analyze performance, identify improvement areas, and optimize processes for better results.
      </p>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">
      <span class="accordion-number">05</span>
      <span class="accordion-title">Reporting and Communication</span>
      <button class="accordion-toggle">+</button>
    </div>
    <div class="accordion-content">
      <p>
        Transparent reporting ensures you stay updated on progress, with regular communication to address your feedback.
      </p>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">
      <span class="accordion-number">06</span>
      <span class="accordion-title">Continual Improvement</span>
      <button class="accordion-toggle">+</button>
    </div>
    <div class="accordion-content">
      <p>
        We embrace innovation and implement changes as required to ensure sustained growth and success for your business.
      </p>
    </div>
  </div>
</div>

    )
}
export default Accordian