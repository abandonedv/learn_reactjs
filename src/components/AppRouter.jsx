import React, {useContext} from 'react';
import {Redirect, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router";
import {privateRoutes, publicRoutes} from "./UI/router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
            </Routes>

            :
            <Routes>
                {publicRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
                )}
            </Routes>

    );
};

export default AppRouter;