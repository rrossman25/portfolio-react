import React from 'react';
import './projects.css';

function Pandemic() {
  return (
    <div className = 'projects-page'>
        <h1 className = 'project-title'>Pandemic</h1>
       
        <img src = 'pandemic.png' alt = 'Pandemic home screen' className = 'project-img wide-img'/>

        <div className = 'projects-div'>
          <p className = 'project-info'>Online version of the popular board game Pandemic</p>
          <p className = 'project-info'>Tech Stack: React, Firebase</p>
          <ul>
              <li className = 'project-info'>I created a React component that rendered a map and canvas, in order for users to have a visual experience while playing the game.</li>
              <li className = 'project-info'>I pair programmed to create the logic necessary for turn functionality with JavaScript.</li>
          </ul>
          <div className = 'project-link'>
            <p className = 'project-info'>Check out our code on:</p>
            <a href = 'https://github.com/rrossman25/pandemic'  target =" _blank" className = 'project-info link-info'>Github</a>
          </div>
          <a href = 'http://onlinepandemicgame.herokuapp.com/'  target =" _blank" className = 'project-info'>Play the game with friends</a>
        </div>
        
    </div>

  );
}

export default Pandemic;