import React from "react";
import {GetHeroByPublisher} from "../../selectors/GetHeroByPublisher";
import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher}) => {
    const heroes = GetHeroByPublisher(publisher);

    return (
        <div className="card-columns">
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
