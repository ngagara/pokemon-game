import React, { useContext } from "react";

import style from '../Finish/finish.module.css';
import PokemonCard from "../../../../components/PkemonCard/PokemonCard";

import { PokemonContext } from '../../../../context/pokemonContext';


const FinishPage = () => {

    const { player1, player2 } = useContext(PokemonContext);

    return (
        <div className={style.wrapp}>
        	<div className={style.flex}>
                {Object.entries(player1).map(
                 ([key, { name, img, id, type, values, selected }]) => (
                <PokemonCard className={style.card} key={key} name={name} img={img}  id={id} type={type} values={values} isActive={true} isSelected={selected}/>)
                 )}
        	</div>
            <button className={style.button}>END GAME</button>
        	<div className={style.flex}>
                {Object.entries(player2).map(
                 ([key, { name, img, id, type, values, selected }]) => (
                <PokemonCard className={style.card} key={key} name={name} img={img}  id={id} type={type} values={values} isActive={true} isSelected={selected}/>)
                 )}
            </div>
        </div>

    );
};

export default FinishPage;