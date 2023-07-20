import React from 'react';
import './ServicePage.css';
import { Link } from 'react-router-dom';
function ServicePage() {
  return (
    <div className="service-page">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <a href="/about">About</a>
            </li> */}
            <li>
              <a href="/services"><Link to ="/ser">Services</Link></a>
            </li>
            <li>
              <a href="/contact"><Link to ="/con">Contact</Link></a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="service-section">
        <h2>Our Services</h2>
        {/* <div className="service-card1">
          <h3></h3>
          
        </div> */}
         <div className="service-card2">
 <h4>         
<br/><br/>At AdvisorHub, we are dedicated to providing comprehensive and personalized advisory services to individuals seeking guidance and support in various aspects of their lives. 
Our team of expert advisors and professionals are committed to assisting clients in making informed decisions, achieving their goals, and improving their overall well-being.

Our range of services includes:<br></br>
<br/><br/>
Financial Advice:<br></br>
Our Financial Advice service offers personalized financial planning and investment guidance to help individuals make sound financial decisions. 
Our experienced advisors provide insights on investment strategies, retirement planning, risk management, and wealth preservation, tailored to each client's unique financial goals and circumstances.
<br/><br/>
Mental Health Advice:<br></br>
Our Mental Health Advice service focuses on supporting individuals in improving their mental well-being. 
Our compassionate therapists and counselors provide a safe and confidential space for clients to discuss and address challenges related to stress, anxiety, depression, and other mental health issues. We offer evidence-based techniques and coping strategies to enhance emotional resilience and promote overall mental wellness.
<br/>
<br/>
Social Life Advice:<br></br>
Our Social Life Advice service aims to assist individuals in building meaningful relationships and enhancing their social interactions. 
Our skilled advisors provide guidance on effective communication, networking, relationship building, and navigating social challenges. We help clients develop social skills and strategies to create a fulfilling social life and foster connections.
<br/><br/>
Education Advice:<br></br>
Our Education Advice service supports individuals in making informed decisions about their educational journey. Whether it's choosing the right academic path, exploring career options, or navigating the college admissions process, our experienced advisors offer personalized guidance and insights to help clients achieve their educational and career aspirations.
At AdvisorHub, we prioritize client satisfaction and strive to deliver exceptional services that empower individuals to make positive changes in their lives. Our team is dedicated to understanding each client's unique needs and providing them with the knowledge, resources, and support they need to succeed.

Please note that the specific details and offerings of our services may vary. We encourage you to explore our website or contact our team for more information and to discover how AdvisorHub can support you in your personal and professional growth.
</h4>

          
        </div> 
        
      </section>

      <footer>
        <p>&copy; 2023 AdvisorHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ServicePage;
