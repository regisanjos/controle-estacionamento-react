import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/Header';
import ListaVagaPage from './pages/ListaVagaPage';
import ReservaPage from './pages/ReservaPage';
import VagasDisponiveis from "./pages/VagasDisponiveis";

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ReservaPage />} />
                <Route path="/list" element={<ListaVagaPage />} />
                <Route path="/vagas-disponiveis" element={<VagasDisponiveis/>}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
