import React from 'react';
import './projects.css';

function Helios() {
  return (
    <div className = 'projects-page'>
        <h1 className = 'project-title'>Helios Wands</h1>

        <img src = 'helios.png' alt = 'Helios Wands Hornbeam Wand screen' className = 'project-img wide-img'/>

        <div className = 'projects-div'>
          <p className = 'project-info'>Online version of the popular board game Helios</p>
          <p className = 'project-info'>Tech Stack: React, Redux, PostgreSQL, Sequelize, Express, Node</p>
          <ul>
              <li className = 'project-info'>I pair programmed to construct a postgreSQL database, through pair programming, to contain relationships between the cart, products, and orders, and used Sequelize to query for the data.</li>
              <li className = 'project-info'>I designed and built a single product React page that held the products, and product information.</li>
          </ul>
          <div className = 'project-link'>
            <p className = 'project-info'>Check out our code on: </p>
            <a href = 'https://github.com/grace-hopper-1906-ebay/ebay'  target =" _blank" className = 'project-info link-info'>Github</a>
          </div>
          <a href = 'http://graceshopper-helios.herokuapp.com/' target =" _blank" className = 'project-info'>Check out the shop</a>
        </div>
        
    </div>

  );
}

export default Helios;