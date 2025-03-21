import React, { useEffect, useState } from "react";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
export const CountRegistros = () => {
  const [countActividades, setCountActividades] = useState("");

  /**
   * realiza peticion GET y filtra el numero de registros laborales que existen
   */
  useEffect(() => {
    const allActividades = async () => {
      // const response = await fetch(`http://localhost:5000/api/actividades`);
      const response = await fetch(
        `https://backend-technova.onrender.com//api/actividades`
      );
      if (response.ok) {
        const dataReponse = await response.json();
        const count = dataReponse.filter((actividad) => actividad).length;

        setCountActividades(count);
      }
    };
    allActividades();
  });
  return (
    <div className="md:p-5 md:mt-5">
      <div className="bg-primary rounded-xl md:p-5 md:w-1/4 text-white">
        <h2 className="font-semibold text-xl">Total De Registros</h2>
        <div className="mt-5 w-2/3 flex items-center justify-between">
          <ContentPasteOutlinedIcon className="text-2xl" />
          <p className="font-bold text-2xl">{countActividades} </p>
        </div>
        <div className="mt-5 w-2/3 flex items-center justify-between">
          <p className="font-bold text-md">Fecha </p>
          <p className="font-bold text-md">2024 </p>
        </div>
      </div>
    </div>
  );
};
