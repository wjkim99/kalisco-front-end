import React from "react";
import Nav from "../../components/nav/Nav";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import HibarinLanding from "../../components/brand/HibrainLanding";
import HibarinContent from "../../components/brand/HibarinContent";
import HibarinMenuContent from "../../components/brand/HibarinMenuContent";
import SabotenLanding from "../../components/brand/SabotenLanding";
import SabotenContent from "../../components/brand/SabotenContent";
import SabotenMenuContent from "../../components/brand/SabotenMenuContent";
import BrandList from "../../components/brand/BrandList";
import Fab from "../../components/brand/fab/Fab";

function Brand() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/saboten/:subject/:menu`}
                    component={SabotenMenuContent}
                />
                <Route
                    path={`${match.path}/saboten/:subject`}
                    component={SabotenContent}
                />
                <Route
                    path={`${match.path}/saboten`}
                    component={SabotenLanding}
                />
                <Route
                    path={`${match.path}/hibarin/:subject/:menu`}
                    component={HibarinMenuContent}
                />
                <Route
                    path={`${match.path}/hibarin/:subject`}
                    component={HibarinContent}
                />
                <Route
                    path={`${match.path}/hibarin`}
                    component={HibarinLanding}
                />
                <Route path={match.path}>
                    <BrandList />
                    <Fab />
                </Route>
            </Switch>
        </>
    );
}

export default Brand;
