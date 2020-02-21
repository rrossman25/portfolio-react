import React from 'react';
import './projects.css';

function Footer() {
  return (
    <div id = 'contact'>
        <h2 id = 'contact-connect'>Let's Connect</h2>
        <div id = 'contact-links-div'>
            <a href = 'http://www.github.com/rrossman25' className = 'contact-link'><img className = 'logo' id = 'github-logo' src = 'gihublogo.png' alt = 'github'/></a>
            <a href = 'http://www.linkedin.com/in/rebecca-rossman' className = 'contact-link' ><img className = 'logo' id = 'linkedin-logo' src = 'linkedin.png' alt = 'linkedin' /></a>
            <a href = 'mailto:rrossman25@gmail.com' className = 'contact-link'><img className = 'logo' id = 'email-logo' src = 'gmail.png' alt = 'email' /></a>
        </div>
    </div>

  );
}

export default Footer;