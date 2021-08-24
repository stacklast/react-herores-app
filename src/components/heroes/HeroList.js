import React, { useMemo } from "react";
import {GetHeroByPublisher} from "../../selectors/GetHeroByPublisher";
import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=> GetHeroByPublisher(publisher), [publisher] );


    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
            heroes.map((hero) => (
                <HeroCard key={
                        hero.id
                    }
                    {...hero}/>
            ))
        } </div>
    );
};
