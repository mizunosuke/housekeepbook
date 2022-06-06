import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = () => {
    const authUser = useAuthUser();
    //userが認証されているか
    const isAuthenticated = authUser != null;
    if(isAuthenticated) {
        return <Route />
    }else{
        console.log("ログインしてください");
        return <Redirect to = "/login"/>
    }
}