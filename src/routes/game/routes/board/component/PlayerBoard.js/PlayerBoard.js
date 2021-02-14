import React, { useState } from "react";

import PokemonCard from '../../../../../../components/PkemonCard/PokemonCard';

import style from './playerBoard.module.css';

import cn from 'classnames';

function PlayerBoard({card, onClickCard, player}) {

  const [isSelected, setSelected] = useState(null);

    return (
    <>
        {
        card.map((item) => (
            <div key={item.id} className={cn(style.cardBoard, {[style.selected] : isSelected === item.id})}
            onClick = {() => {
                setSelected(item.id);
                onClickCard && onClickCard({
                    player,
                    ...item,
                });
             }}>
            <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} type={item.type} values={item.values} isActive={true} minimize/>
            </div>
        ))
        }
    </>
 );

}
    
export default PlayerBoard;