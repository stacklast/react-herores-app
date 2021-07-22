import { heroes } from 'heroes';

export const GetHeroById = ( id ) => {
    
    return heroes.find( hero => hero.id === id );

}
