import React, {useState} from "react";
import style from './nav-bar.module.css';
import cn from 'classnames';

const NavBar = ({onClickMenu, state}) => {
  
    const handleClick = () => {
       onClickMenu && onClickMenu(!state)
    };

  return (
   <nav id={style.navbar}>
     <div className={style.navWrapper}>
       <p className={style.brand}>
         LOGO
       </p>
       <a onClick={handleClick} className={cn(style.menuButton, {[style.active] : state})}>
         <span />
       </a>
     </div>
   </nav>
  );
}

export default NavBar;