import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <div id = 'sections-div'>

  {/* <!-- WELCOME --> */}
        <section className = 'welcome-section'>
          <h1 id = 'name' >Rebecca Rossman</h1>
          <h2 id = 'job-title'>Software Developer</h2>
        </section>

  {/* <!-- ABOUT --> */}
        <section id = 'about'>
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
          <div id = 'skills'>
            <p id = 'skills-title' className = 'about-information'>Technical Skills:</p>
            <p className = 'about-information'>Proficient: Javascript, Node.js, CSS, HTML, Express, Git, React, Redux, Sequelize, PostgreSQL</p>
            <p className = 'about-information'>Knowledgeable: Mocha, Chai, React Native, Firebase, Firestore, Expo, Heroku, Travis, React-Bootstrap</p>
            <p className = 'about-information'>Some Experience: Python, SQL, Sockets.io</p>
          </div>
        </section>

  {/* <!-- PROJECTS --> */}
        <section id = 'projects' name = 'projects'>
          <h2 id = 'projects-title'>Some of my projects...</h2>
          <div id = 'projects-div'>
            <div id = 'pandemic' className = 'project-tile'>
              <a href = 'http://onlinepandemicgame.herokuapp.com/' target =" _blank" ><img src = 'pandemic.png' alt = 'Pandemic home screen' className = 'project-img' id = 'pandemic-img'/></a>
              <Link to = '/pandemic'>Pandemic</Link>
            </div>
            <div id = 'binge' className = 'project-tile'>
              <a href = 'http://www.github.com/rrossman25/binge'  target =" _blank" ><img src = 'binge.jpg' alt = 'Binge home screen' className = 'project-img' id = 'binge-img'/></a>
              <Link to = '/binge'>Binge</Link>
            </div>
            <div id = 'helios' className = 'project-tile'>
              <a href = 'http://graceshopper-helios.herokuapp.com/' target =" _blank" ><img src = 'helios.png' alt = 'Helios Wands Hornbeam Wand screen' className = 'project-img' id = 'helios-img'/></a>
              <Link to = '/helios'>Helios</Link>
            </div>
          </div>
          <a href = 'https://sharemygame.com/@rrossman25/invasion' rel="noopener noreferrer" target = "_blank" id = 'new-game'>Check out my new choose your own quest game!</a>
        </section>

      </div>
    </div>

  );
}

export default Home;