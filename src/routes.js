import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Get from "./pages/Ver";
import Post from "./pages/Criar";
import Edit from "./pages/Edit";
import Dele from "./pages/Dele";
import NoPage from "./pages/NoPage";

import "./index.css";



function RotasAnimadas() {

    const location = useLocation()

    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Layout />}>
            <Route index exact element={<Home />} />
            <Route path="/Get" exact element={<Get />} />
            <Route path="/Post" exact element={<Post />} />
            <Route path="/Editar/:barra/:id" exact element={<Edit />} />
            <Route path="/Deletar/:barra/:id" exact element={<Dele />} />
            <Route path="*" exact element={<NoPage />} />
            </Route>
        </Routes>
        </AnimatePresence>
    )
}

export default RotasAnimadas