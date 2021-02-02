import React, {useState} from "react";
import style from './menu.module.css';
import cn from 'classnames';

import NavBar from '../nav-bar/nav-bar';


const Menu = ({onClickMenu, state}) => {

  const [isActive, setActive] = useState(false);

    const handleClick = () => {
        onClickMenu && onClickMenu(!state)
        setActive(!isActive);
      }

  return (
     <div className={cn(style.menuContainer, {[style.active]: !isActive, [style.deactive]: isActive})}>
     <div className={style.overlay} />
     <div classname={style.menuItems}>
       <ul>
         <li>
           <a href="#welcome">
             HOME
           </a>
         </li>
         <li>
           <a href="#game">
             GAME
           </a>
         </li>
         <li>
           <a href="#about">
             ABOUT
           </a>
         </li>
         <li>
           <a href="#contact">
             CONTACT
           </a>
         </li>
       </ul>
     </div>
   </div>
  );
}

export default Menu;

