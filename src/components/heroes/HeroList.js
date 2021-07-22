import React from 'react'
import { GetHeroByPublisher } from '../../selectors/GetHeroByPublisher'

export const HeroList = ( {publisher} ) => {

    const heroes = GetHeroByPublisher( publisher );

    return (
        <ul>
            {
                heroes.map( hero => (
                    <li key={ hero.id }>
                        { hero.superhero }
                    </li>
                ))
            }
        </ul>
    )
}
