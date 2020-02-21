import React from 'react';
import './projects.css';

function Invasion() {
  return (
    <div>
        <h1>Invasion</h1>
        {/* <img src = 'invasion.png' alt = 'Invasion home screen' className = 'project-img' id = 'invasion-img'/> */}
        <p>Text based choose your own quest game about an alien invasion</p>
        <p>Tech Stack: C#, Unity</p>
        <ul>
            <li>I created a React component that rendered a map and canvas, in order for users to have a visual experience while playing the game.</li>
            <li>I pair programmed to create the logic necessary for turn functionality with JavaScript.</li>
        </ul>
        <p>Check out our code on</p>
        <a href = 'https://github.com/rrossman25/pandemic'  target =" _blank" >Github</a>
        <a href = 'http://onlinepandemicgame.herokuapp.com/'  target =" _blank" >Play the game with friends</a>
        
    </div>

  );
}

export default Invasion;