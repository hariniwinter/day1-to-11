import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="pp">
      <header>
        <nav>
          <div className="lo">
            <img src="https://res.cloudinary.com/dyrrmsdbj/image/upload/v1689051190/CM_HUB_k3xksi.gif" alt="Logo" />
          </div>
          <ul>
            {/* <li><a href="/">Home</a></li> */}
            {/* <li><a href="/about">About</a></li> */}
            {/* <li><a href="/services">Services</a></li> */}
            <li className="signuser"><a href="/signuser"><Link to='/signuser'>Sign up user</Link></a></li> 
            <li className="login"><a href="/login"><Link to ='/login'>Login</Link></a></li>
            <li className="signup"><a href="/signup"><Link to ='/signup'>Sign Up Advisor</Link></a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h>Welcome to CM Hub</h>
        {/* <g>Keep calm AND clear your mind</g> */}
        <section className="dashboard">
         
          <div className="card-container">
             <div className="card"> 
            <t> The mind is like a water.<br></br>
           when its turbulent,it's difficult to see.<br></br>We help you see clearer.</t>
            </div>
            <div className="card1"></div>
           
            
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 AdvisorHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
