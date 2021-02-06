import {Link} from "react-router-dom";

import {MENU} from '../../constants/data';

import style from './menu.module.css';
import cn from 'classnames';

const Menu = ({ isOpen, onClickMenu }) => {

	const closeMenu = () => {
		onClickMenu()
	  };

  return (
     <div className={cn(style.menuContainer, 
     {[style.active] : isOpen === true, 
     [style.deactive] : isOpen === false})}>
     <div className={style.overlay} />
     <div className={style.menuItems}>
     <ul>
		 { 
		  MENU.map((item, index) => (
		  <li>
			  <Link key={index} onClick={closeMenu} to={item.to}>{item.title}</Link>
		  </li>
		  ))
         }
	</ul>
     </div>
   </div>
  );
}

export default Menu;

