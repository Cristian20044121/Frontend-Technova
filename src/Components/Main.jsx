import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { RegistroActividad } from "./RegistroActividad/RegistroActividad";
import { FormEdit } from "./FormEdit/FormEdit";
export const Main = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/registrarActividad" element={<RegistroActividad />} />
          <Route path="/editarActividad/:id" element={<FormEdit />} />
        </Route>
      </Routes>
    </div>
  );
};
