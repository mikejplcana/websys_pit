import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import AdmittedP from "../components/pages/AdmittedP";
import EntryCard from "../components/pages/EntryCard";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admitted-patients" element={<AdmittedP />} />
        <Route path="/entry-cards" element={<EntryCard />} />
      </Routes>
    </BrowserRouter>
  );
}