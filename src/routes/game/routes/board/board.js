import React, { useContext } from "react";
import PokemonCard from "../../../../components/PkemonCard/PokemonCard";


import { PokemonContext } from '../../../../context/pokemonContext';
import style from '../Board/board.module.css';

const BoardPage = () => {

  const { pokemons } = useContext(PokemonContext);

    return (
        <div className={style.root}>
						<div className={style.playerOne}>

                            {
                                Object.values(pokemons).map(({id, name, img, type, values}) => (
                                <PokemonCard className={style.card} key={id} id={id} name={name} img={img} type={type} values={values} isActive={true} minimize/>
                                ))
                            }

						</div>
            <div className={style.board}>
                <div className={style.boardPlate}>1</div>
                <div className={style.boardPlate}>2</div>
                <div className={style.boardPlate}>3</div>
                <div className={style.boardPlate}>4</div>
                <div className={style.boardPlate}>5</div>
                <div className={style.boardPlate}>6</div>
                <div className={style.boardPlate}>7</div>
                <div className={style.boardPlate}>8</div>
                <div className={style.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;