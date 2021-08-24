import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { GetHeroById } from '../../selectors/GetHeroById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();
    
    const hero = useMemo(()=> GetHeroById(heroeId), [heroeId] );
    
    if( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = ()=>{

        if( history.length <= 2){
            history.push('/');
        }
        else{

            history.goBack();
        }
    }

    const {
        superhero,
        alter_ego,
        publiser,
        first_appearance,
        characters,
      } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ `../assets/heroes/${heroeId}.jpg` } className="img-thumbnail" alt="superhero" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publiser}
                    </li>
                    <li className="list-group-item">
                        <b>first Appeareance: </b> {first_appearance}
                    </li>
                </ul>
                <h5>Character</h5>
                <p> { characters} </p>
                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}
