import React from 'react';
import './App.css';

function App() {
  return (
    <div>

       {/* <!-- NAVBAR --> */}
      <div>
        <nav id = 'navbar' className = 'nav'>
          <a href = '#about' className = 'nav-link'>About</a>
          <a href = '#projects' className = 'nav-link'>Work</a>
          <a href = '#contact' className = 'nav-link'>Contact</a>
        </nav>
      </div>


      <div id = 'sections-div'>

  {/* <!-- WELCOME --> */}
        <section id = 'welcome-section'>
          <h1 id = 'name' >Rebecca Rossman</h1>
          <h2 id = 'job-title'>Software Developer</h2>
        </section>

  {/* <!-- ABOUT --> */}
        <section id = 'about' name = 'about'>
          <h2>About Me</h2>
          <div id = 'about-div'>
            <img id = 'about-pic' src = 'https://bit.ly/2tfPjCi' alt = 'Me'/>
            <div id = 'info-div'>
              <p className = 'about-information'>I began my career in film and business, and have always enjoyed problem solving and creating.</p>
              <p className = 'about-information'>My first introduction to code was in a programming course in college, and I loved it so much that I began to teach myself to code.</p>
              <p className = 'about-information'>While exploring a career in film, my passion for coding reignited and I decided to change my trajectory to pursue a path as a Software Engineer.</p>
              <p className = 'about-information'>I decided to attend The Grace Hopper Program to enhance my programming skills and to begin immersing myself in the tech industry.</p>
              <p className = 'about-information'>I am excited to begin my new career in technology with a company that values innovation, passion, and integrity.</p>
            </div>
          </div>
          <p id = 'skills' className = 'about-information'>Technical Skills:</p>
          <p className = 'about-information'>Proficient: Javascript, Node.js, CSS, HTML, Express, Git, React, Redux, Sequelize, PostgreSQL</p>
          <p className = 'about-information'>Knowledgeable: Mocha, Chai, React Native, Firebase, Firestore, Expo, Heroku, Travis, React-Bootstrap</p>
          <p className = 'about-information'>Some Experience: Python, SQL, Sockets.io</p>
        </section>

  {/* <!-- PROJECTS --> */}
        <section id = 'projects' name = 'projects'>
          <h2 id = 'projects-title'>Some of my projects...</h2>
          <div id = 'projects-div'>
            <div id = 'pandemic' className = 'project-tile'>
              <a href = 'http://onlinepandemicgame.herokuapp.com/' target =" _blank" ><img src = 'pandemic.png' alt = 'Pandemic home screen' className = 'project-img' id = 'pandemic-img'/></a>
              <a href = 'http://onlinepandemicgame.herokuapp.com/' target =" _blank" >Pandemic</a>
            </div>
            <div id = 'binge' className = 'project-tile'>
              <a href = 'http://www.github.com/rrossman25/binge'  target =" _blank" ><img src = 'binge.jpg' alt = 'Binge home screen' className = 'project-img' id = 'binge-img'/></a>
              <a href = 'http://www.github.com/rrossman25/binge'  target =" _blank" >Binge</a>
            </div>
            <div id = 'helios' className = 'project-tile'>
              <a href = 'http://graceshopper-helios.herokuapp.com/' target =" _blank" ><img src = 'helios.png' alt = 'Helios Wands Hornbeam Wand screen' className = 'project-img' id = 'helios-img'/></a>
              <a href = 'http://graceshopper-helios.herokuapp.com/' target =" _blank" >Helios Wands</a>
            </div>
          </div>
        </section>

  {/* <!-- CONTACT --> */}
        <section id = 'contact' name = 'contact'>
          <h2 id = 'contact-connect'>Let's Connect</h2>
          <div id = 'contact-links-div'>
            <a href = 'http://www.github.com/rrossman25' className = 'contact-link'><img className = 'logo' id = 'github-logo' src = 'gihublogo.png' alt = 'github'/></a>
            <a href = 'http://www.linkedin.com/in/rebecca-rossman' className = 'contact-link' ><img className = 'logo' id = 'linkedin-logo' src = 'linkedin.png' alt = 'linkedin' /></a>
            <a href = 'mailto:rrossman25@gmail.com' className = 'contact-link'><img className = 'logo' id = 'email-logo' src = 'gmail.png' alt = 'email' /></a>
          </div>
        </section>
      </div>
    </div>

  );
}

export default App;
