import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import AdmittedP from "../components/pages/AdmittedP";
import EntryCard from "../components/pages/EntryCard";
import CheckUp from "../components/pages/CheckUp";
import RegularP from "../components/pages/RegularP";
import OperatedP from "../components/pages/OperatedP";
import DischargedP from "../components/pages/DischargedP";
import FormCheckUp from "../components/pages/FormCheckUp";
import FormAdmission from "../components/pages/FormAdmission";
import FormDischarge from "../components/pages/FormDischarge";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admitted-patients" element={<AdmittedP />} />
        <Route path="/entry-cards" element={<EntryCard />} />
        <Route path="/check-ups" element={<CheckUp />} />
        <Route path="/regular-patients" element={<RegularP />} />
        <Route path="/operated-patients" element={<OperatedP />} />
        <Route path="/discharged-patients" element={<DischargedP />} />
        <Route path="/check-up" element={<FormCheckUp />} />
        <Route path="/admission" element={<FormAdmission />} />
        <Route path="/discharge" element={<FormDischarge />} />
      </Routes>
    </BrowserRouter>
  );
}