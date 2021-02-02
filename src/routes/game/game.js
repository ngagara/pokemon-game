import React, { useState } from "react";
import style from './game.module.css';

function GamePage({onChangePage}) {

    const handleClick = () => {
        onChangePage && onChangePage('home');
      }
  
    return (
      <div>
          This game page!
          <button onClick={handleClick}>Home Page!</button>
      
      </div>
    );
  }
  
  export default GamePage;
  