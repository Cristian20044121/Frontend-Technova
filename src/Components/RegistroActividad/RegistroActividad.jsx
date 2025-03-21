import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegistroActividad = () => {
  //manejo de datos de formulario
  const [usuario, setUsuario] = useState("");
  const [proyecto, setProyecto] = useState("");
  const [compañia, setCompañia] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [minutos, setMinutos] = useState("");
  const [fecha, setFecha] = useState("");
  const [equipo, setEquipo] = useState("");

  /**
   * manejo de peticon POST para agregar un nuevo registro de actividad laboral
   */
  const fetchNuevaActividad = async (
    usuario,
    proyecto,
    compañia,
    tipo,
    descripcion,
    minutos,
    fecha,
    equipo
  ) => {
    try {
      await fetch("http://localhost:5000/api/actividades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario,
          proyecto,
          compañia,
          tipo,
          descripcion,
          minutos,
          fecha,
          equipo,
        }),
      });
    } catch (error) {
      console.log(`Error al enviar un nuevo registro ${error}`);
      alert(
        "Error al enviar un nuevo registro: alguno de los datos no coincide"
      );
    }
  };
  /**
   * evento para enviar un nuevo registro de actividad
   * @param {*} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchNuevaActividad(
      usuario,
      proyecto,
      compañia,
      tipo,
      descripcion,
      minutos,
      fecha,
      equipo
    );
    //reset de inputs del formulario
    setUsuario("");
    setProyecto("");
    setCompañia("");
    setTipo("");
    setDescripcion("");
    setMinutos("");
    setFecha("");
    setEquipo("");
  };

  /**
   * manejo de rediricionamiento a componente Home
   */
  const navigate = useNavigate();
  const handleRedirection = () => [navigate("/")];
  return (
    <div className="md:pl-5">
      <div className="bg-white flex flex-col justify-center items-center p-8 rounded-lg shadow-lg w-full h-screen">
        <h2 className="text-3xl font-semibold text-center text-primary mb-6">
          Agregar Registro De Actividad
        </h2>
        <form className="flex flex-col gap-4 md:mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col">
              <label htmlFor="usuario" className="text-gray-600 mb-2">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Nombre de usuario"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="proyecto" className="text-gray-600 mb-2">
                Nombre de proyecto
              </label>
              <input
                type="text"
                id="proyecto"
                value={proyecto}
                onChange={(e) => setProyecto(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Nombre de proyecto"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="compañia" className="text-gray-600 mb-2">
                Nombre de compañia
              </label>
              <input
                type="text"
                id="compañia"
                value={compañia}
                onChange={(e) => setCompañia(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Nombre de compañia"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tipo" className="text-gray-600 mb-2">
                Tipo de actividad
              </label>
              <input
                type="text"
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Tipo de actividad"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col">
              <label htmlFor="descripcion" className="text-gray-600 mb-2">
                Descripción de actividad
              </label>
              <input
                type="text"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Descripción de actividad"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="minutos" className="text-gray-600 mb-2">
                Número de minutos
              </label>
              <input
                type="number"
                id="minutos"
                value={minutos}
                onChange={(e) => setMinutos(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Número de minutos"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fecha" className="text-gray-600 mb-2">
                Fecha de actividad
              </label>
              <input
                type="text"
                id="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Fecha de actividad"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="equipo" className="text-gray-600 mb-2">
                Nombre de equipo
              </label>
              <input
                type="text"
                id="equipo"
                value={equipo}
                onChange={(e) => setEquipo(e.target.value)}
                className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Nombre de equipo"
              />
            </div>
          </div>
          <button
            onClick={handleRedirection}
            type="submit"
            className=" bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md mt-4  md:w-1/2 mx-auto md:mt-5"
          >
            Agregar Registro
          </button>
        </form>
      </div>
    </div>
  );
};
