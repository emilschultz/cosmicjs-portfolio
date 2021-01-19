import React from 'react';
import { NavLink } from 'react-router-dom';


const SiteNavigation = () => {
    return(
       
         <nav>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </nav>
    )
}

export default SiteNavigation;