import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreem } from '../components/search/SearchScreem';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreem } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
