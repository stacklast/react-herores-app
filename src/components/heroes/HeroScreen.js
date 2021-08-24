import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { GetHeroById } from '../../selectors/GetHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();
    
    const hero = GetHeroById( heroeId );
    
    if( !hero ){
        return <Redirect to="/" />
    }


    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters,
      } = hero;

    return (
        <div>
            <h1>Hero Screen</h1>
            <hr />
        </div>
    )
}
