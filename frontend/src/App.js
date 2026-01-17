import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import DisenoPage from "./pages/Diseno/DisenoPage";
import MarketingPage from "./pages/Marketing/MarketingPage";
import AgenciaPage from "./pages/Agencia/AgenciaPage";
import BudgetPage from "./pages/Budget/BudgetPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diseno" element={<DisenoPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/agencia" element={<AgenciaPage />} />
            <Route path="/presupuesto" element={<BudgetPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
