import { heroes } from '../data/heroes';

export const GetHeroById = ( id ) => {
    
    return heroes.find( hero => hero.id === id );

}
