import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Panel, TabList, PanelList, Tab } from '@react-tabtab-next/tabtab';
import './HomePage.css';

function HomePage() {
  return (
    <div className="backg">
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/price"><Link to="/p">Pricing</Link></a>
              </li>
              <li>
                <a href="/services"><Link to="/ser">Services</Link></a>
              </li>
              <li>
                <a href="/contact"><Link to ="/con">Contact</Link></a>
              </li>
            </ul>
          </nav>
          <div className="logout">
            <a href="/logout"><Link to ="/out">Logout</Link></a>
          </div>
        </header>

        <section>
          <div className="cards-container1">
            <div className="cardo">
              <h3>MENTAL HEALTH</h3>
              <p>The art of preserving the mind against all incidents and influences calculated to deteriorate its qualities, impair its energies, or derange its movements.</p>
          
            </div>
            <div className="card2">
              <h3>FINANCE</h3>
              <p>The purpose of financial management is to guide businesses or individuals on financial decisions that affect financial stability both now and in the future.And we can help you solve that.</p>
            </div>
            <div className="card3">
              <h3>EDUCATION</h3>
             <p>The education your child receives will set the groundwork for future successes. No matter his age -- from kindergarten to high school -- we have all the advice and information you need on reaching potential in reading, writing, math, and more.</p>
            </div>
          </div>

          <Tabs className="tabs-container">
            <TabList className="tab-list">
              <Tab className="tab">Education Advice</Tab>
              <Tab className="tab">Finance Advice</Tab>
              <Tab className="tab">Mental Health Advice</Tab>
              <Tab className="tab">Social life Advice</Tab>
            </TabList>
            <PanelList className="panel-list">
              <Panel className="panel">
                <div className="panel-content">
                  <h3>Panel 1</h3>
                  <p>text</p>
                  <Link to='/profile1'><img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689245240/user_318-286823_au5azt.png" alt="Image 1" /></Link>
                  
                 </div>
                <div className="panel-content">
                  <h3>Panel 1</h3>
                  <p>text</p>
                  <Link to='/profile1'><img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689245240/user_318-286823_au5azt.png" alt="Image 1" /></Link>
                 
                </div>
                <div className="panel-content">
                  <h3>Panel 1</h3>
                  <p>text</p>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689245240/user_318-286823_au5azt.png" alt="Image 1" />
                  
                </div>
              </Panel>  

              <Panel className="panel">
                <div className="panel-content">
                  <h3>Panel 2</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318041/3135715_ztmd8f.png" alt="Image 2" />
                  
                </div>
                <div className="panel-content">
                  <h3>Panel 2</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318041/3135715_ztmd8f.png" alt="Image 2" />
                  
                </div>
                <div className="panel-content">
                  <h3>Panel 2</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318041/3135715_ztmd8f.png" alt="Image 2" />
                  
                </div>
                <div className="panel-content">
                  <h3>Panel 2</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318041/3135715_ztmd8f.png" alt="Image 2" />
                  
                </div>
              </Panel>
              <Panel className="panel">
                <div className="panel-content">
                  <h3>Panel 3</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318007/profile-icon-design-free-vector_qypfzp.jpg" alt="Image 3" />
                  
                </div>
                <div className="panel-content">
                  <h3>Panel 3</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318007/profile-icon-design-free-vector_qypfzp.jpg" alt="Image 3" />
                  
                </div>
                <div className="panel-content">
                  <h3>Panel 3</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318007/profile-icon-design-free-vector_qypfzp.jpg" alt="Image 3" />
                  
                </div>
                
              </Panel>
              <Panel className="panel">
                <div className="panel-content">
                  <h3>Panel 4</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318007/profile-icon-design-free-vector_qypfzp.jpg" alt="Image 4" />
                 
                </div>
                <div className="panel-content">
                  <h3>Panel 4</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318007/profile-icon-design-free-vector_qypfzp.jpg" alt="Image 4" />
                 
                </div>
                <div className="panel-content">
                  <h3>Panel 4</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318007/profile-icon-design-free-vector_qypfzp.jpg" alt="Image 4" />
                 
                </div>
                <div className="panel-content">
                  <h3>Panel 4</h3>
                  <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689318007/profile-icon-design-free-vector_qypfzp.jpg" alt="Image 4" />
                 
                </div>
              </Panel>
            </PanelList>
          </Tabs>
        </section>

        <footer>
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
