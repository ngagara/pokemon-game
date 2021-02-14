import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "../../../../components/PkemonCard/PokemonCard";

import { useHistory } from "react-router-dom";
import { PokemonContext } from '../../../../context/pokemonContext';

import style from '../Board/board.module.css';
import PlayerBoard from "./component/PlayerBoard.js/PlayerBoard";

const counterWins = (board, player1, player2) => {


    let player1count = player1.length;
    let player2count = player2.length;

    board.forEach(item => {
        if(item.card.possession === 'red') {
            player2count++; 
        }

        if(item.card.possession === 'blue') {
            player1count++; 
        }  
    });

    return [player1count, player2count]
}

const BoardPage = () => {

  const history = useHistory();

  const { pokemons, setCardsPlayer } = useContext(PokemonContext);

  const [board, setBoard] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [player1, setPlayer1] = useState(() =>{
      return Object.values(pokemons).map(item => ({
          ...item,
          possession: 'blue'
      }))
  });
  const [choiceCard, setChoiceCard] = useState(null);
  const [steps, setSteps] = useState(0);

  if (Object.keys(pokemons).length === 0) {
    history.replace('/game/');
  }

  useEffect(async () => {

     const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
     const boardRequest = await boardResponse.json();
     setBoard(boardRequest.data);

     const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
     const player2Request = await player2Response.json();
     setPlayer2(() =>{
        return player2Request.data.map(item => ({
            ...item,
            possession: 'red'
        }));
    });

    setCardsPlayer(player1, player2Request.data);


  },[]);

  const handlerClickBoardPlate = async (position) => {

    if(choiceCard) {
        const params = {
            position,
            card: choiceCard,
            board
        }
        const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
           });
        
           const request = await res.json();

        if (choiceCard.player === 1) {
            setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
        }
    
        if (choiceCard.player === 2) {
            setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
        }

        setBoard(request.data);
    
        setSteps(prevState => {
            const count = prevState + 1;
            return count
        })
    }
  }

  useEffect(()=> {
    if (steps === 9) {
        const [count1, count2] = counterWins(board, player1, player2)
                 
        if (count1 > count2) {
             alert("win")
             history.push('/game/finish');
        } else if (count1 < count2) {
             alert("los") 
             history.push('/game');
        }else {
             alert("draw")   
             history.push('/game');
        }
    }
    },[steps]);

    return (
        <div className={style.root}>
		<div className={style.playerOne}>
          <PlayerBoard onClickCard={(card)=>{setChoiceCard(card)}} card={player1} player={1}/>
		</div>
         <div className={style.board}>
          {
           board.map(item => (
           <div key={item.position} className={style.boardPlate} onClick={()=>!item.card && handlerClickBoardPlate(item.position)}>
              {
                  item.card && <PokemonCard {...item.card} isActive minimize/>
              }
            </div>))
          }
         </div>
		<div className={style.playerTwo}>
          <PlayerBoard onClickCard={(card)=>{setChoiceCard(card)}} card={player2} player={2}/>
        </div>
      
        </div>
    );
}

export default BoardPage;