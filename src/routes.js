import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/Header';
import ListaVagaPage from './pages/ListaVagaPage';
import ReservaPage from './pages/ReservaPage';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ReservaPage />} />
                <Route path="/list" element={<ListaVagaPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
