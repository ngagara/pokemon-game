import React, {useState} from "react";
import Menu from '../menu/menu';
import NavBar from '../nav-bar/nav-bar';

const HeaderMenu = () => {

  const [isActive, setActive] = useState(false);

  const handleChangeMenu = () => {
    setActive(!isActive);
  };

  switch (isActive) {
    case true:
      return (
        <>
        <NavBar onClickMenu={handleChangeMenu} state={isActive}/>
        <Menu onClickMenu={handleChangeMenu} state={isActive}/>
        </>
      )
    case false:
      return <NavBar onClickMenu={handleChangeMenu} state={isActive}/>;
  }
}

export default HeaderMenu;

