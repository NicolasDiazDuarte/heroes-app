import React from 'react';
import { Switch ,Route, Redirect} from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>

                    <Route exact path="/marvel" component={MarvelScreen} />  
                    <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
                    <Route exact path="/dc" component={DcScreen} />

                    <Redirect to="/marvel"/>

                </Switch>

            </div>
        </>
    )
}
