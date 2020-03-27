import React from 'react';
import './App.css';

function Binge() {
  return (
    <div className = 'projects-page'>
        <h1 className = 'project-title'>Binge</h1>

        <img src = 'binge.jpg' alt = 'Binge home screen' className = 'project-img'/>

        <div className = 'projects-div'>
          <p className = 'project-info'>Mobile App that utilizes crowdsourcing to see where television shows and movies are streaming</p>
          <p className = 'project-info'> Tech Stack: React Native, Firebase</p>
          <ul>
              <li className = 'project-info'>Built a React Native mobile application, that contained several screens and components, allowing users to see what entertainment was available and where.</li>
              <li className = 'project-info'>Stored data entered by users into a Firestore database, ensuring the same data could be read in different areas of the application</li>
          </ul>
          <div className = 'project-link'>
            <p className = 'project-info'>Check out my code on:</p>
            <a href = 'http://www.github.com/rrossman25/binge'  target =" _blank" className = 'project-info link-info'>Github</a>
          </div>
        </div>
        
    </div>

  );
}

export default Binge;
