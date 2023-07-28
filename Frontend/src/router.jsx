/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './components/pages/home'
import CreateUser from './components/pages/createUser';
import User from './components/pages/user'
import Users from './components/pages/users'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateUser/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/user/:userId" element={<User/>}/>
                <Route path="/users" element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes