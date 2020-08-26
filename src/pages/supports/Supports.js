import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import SupportDetailContent from "../../components/support/SupportDetailContent";

function Supports() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/membership`}
                    component={SupportDetailContent}
                />
                <Route path={match.path}></Route>
            </Switch>
            <Footer />
        </>
    );
}

export default Supports;
