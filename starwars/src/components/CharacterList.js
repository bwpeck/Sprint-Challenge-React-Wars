import React from 'react';
import Character from './Character';
import './StarWars.css';


const CharacterList = props => {
    return (
        <div className='characterContainer'>
            {props.starwarsChars.map((item) => {
                return <Character key={item.created} Character={item} />;
            })}
        </div>
    );
};

export default CharacterList;