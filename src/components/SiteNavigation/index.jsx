import React from 'react';
import { NavLink } from 'react-router-dom';

import SiteNavigationStyle from '../../components/SiteNavigationStyle';


const SiteNavigation = () => {
    return(
       
         <SiteNavigationStyle>
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
          </SiteNavigationStyle>
    )
}

export default SiteNavigation;