import React, { useState } from "react";
import HomePage from './routes/home/home';
import GamePage from './routes/game/game';

const App = () => {
  const [page, setPage] = useState('home');

  const handleChangePage = (page) => {
    setPage(page)
  }

  switch(page) {
    case 'home' :
      return <HomePage onChangePage={handleChangePage}/>
    case 'game' :
      return <GamePage onChangePage={handleChangePage}/>
    default:
      return <HomePage onChangePage={handleChangePage}/>
  }
};

export default App;

