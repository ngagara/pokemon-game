import GamePage from '../../routes/game/game';
import style from './header.module.css';

const Header = ({title, desc, onClickButton}) => {

  const handleClick = () => {
    onClickButton && onClickButton('game');
  }

    return (
      <header className={style.root}>
      <div className={style.forest}></div>
          <div className={style.container}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button onClick={handleClick}>
              Start Game!
            </button>
          </div>
      </header>
    );
  }
  
export default Header