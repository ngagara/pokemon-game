import style from './nav-bar.module.css';
import cn from 'classnames';


const NavBar = ({onClickMenu, isOpen, bgActive}) => {
  
  return (
   <nav id={style.navbar} className={cn({[style.bgActive]: bgActive})}>
     <div className={style.navWrapper}>
       <p className={style.brand}>
         POKEMON GAME
       </p>
       <div onClick={onClickMenu} className={cn(style.menuButton, {[style.active] : isOpen})}>
         <span />
         </div>
     </div>
   </nav>
  );
}

export default NavBar;