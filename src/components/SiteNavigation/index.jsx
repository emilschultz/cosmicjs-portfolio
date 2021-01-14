import React from 'react';
import { Link, Router } from 'react-router-dom';


const SiteNavigation = () => {
    return(
       
         <nav>
            <ul>
              <li>
                <Link to="/HomeContainer">Home</Link>
              </li>
              <li>
                <Link to="/AboutContainer">About</Link>
              </li>
              <li>
                <Link to="/ContactContainer">Contact</Link>
              </li>
            </ul>
          </nav>
    )
}

export default SiteNavigation;