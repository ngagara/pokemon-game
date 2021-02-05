import React, {useState} from "react";
import Menu from '../menu/menu';
import NavBar from '../nav-bar/nav-bar';

const HeaderMenu = ({bgActive}) => {

  const [isOpen, setOpen] = useState(null);

  const handleChangeMenu = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
    <NavBar onClickMenu={handleChangeMenu} isOpen={isOpen} bgActive={bgActive} />
    <Menu onClickMenu={handleChangeMenu} isOpen={isOpen}/>
    </>
  )
}

export default HeaderMenu;

