import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="login"><a href="/login"><Link to ='/login'>Login</Link></a></li>
            <li className="signup"><a href="/signup"><Link to ='/signup'>Sign Up</Link></a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Welcome to AdvisorHub!</h1>
        <section className="dashboard">
          <h2>Dashboard</h2>
          {}
          <div className="card-container">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
            <div className="card">Card 4</div>
            <div className="card">Card 5</div>
            
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
