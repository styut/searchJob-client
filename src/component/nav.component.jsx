import React from 'react';
import '../style/nav.css';
import { Outlet ,Link} from "react-router-dom";

export const Nav = () => {
    
    return <div>
      <header>
    <nav>
      <ul>
       <li ><Link to={'/home'}>Home</Link></li>
       <li ><Link to={'/menu'}>Menu</Link></li>
       <li ><Link to={'/about'}>About</Link></li>
       <li ><Link to={'/contact'}>Contact</Link></li>
       <li ><Link to={'/gallery'}>Gallery</Link></li>
      </ul>
    </nav>
  </header>
  <Outlet/>
    </div>
}