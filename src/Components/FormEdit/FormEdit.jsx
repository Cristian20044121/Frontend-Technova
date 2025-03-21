import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const FormEdit = () => {
  const { id } = useParams();
  //manejo de estado para formulario de editar actividad
  const [usuarioEdit, setUsuarioEdit] = useState("");
  const [proyectoEdit, setProyectoEdit] = useState("");
  const [compañiaEdit, setCompañiaEdit] = useState("");
  const [tipoEdit, setTipoEdit] = useState("");
  const [descripcionEdit, setDescripcionEdit] = useState("");
  const [minutosEdit, setMinutosEdit] = useState("");
  const [fechaEdit, setFechaEdit] = useState("");
  const [equipoEdit, setEquipoEdit] = useState("");

  /**
   * obtener actividad por id
   */
  useEffect(() => {
    const getOneActividad = async () => {
      try {
        // const actividadId = await fetch(
        //   `http://localhost:5000/api/actividades/${id}`
        // );
        const actividadId = await fetch(
          `https://backend-technova-6smf.onrender.com/api/actividades/${id}`
        );

        if (actividadId.ok) {
          const actividad = await actividadId.json();
          setUsuarioEdit(actividad.usuario);
          setProyectoEdit(actividad.proyecto);
          setCompañiaEdit(actividad.compañia);
          setTipoEdit(actividad.tipo);
          setDescripcionEdit(actividad.descripcion);
          setMinutosEdit(actividad.minutos);
          setFechaEdit(actividad.fecha);
          setEquipoEdit(actividad.equipo);
        }
        // se agrega la informacion obtenida por id a los estados de actualizacion
      } catch (error) {
        console.log(error);
      }
    };
    getOneActividad();
  }, [id]);
  /**
   * Realiza peticion PUT para actualizar actividad indicada por ID
   */
  const actividadActualizada = async () => {
    try {
      await fetch(`http://localhost:5000/api/actividades/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: usuarioEdit,
          proyecto: proyectoEdit,
          compañia: compañiaEdit,
          tipo: tipoEdit,
          descripcion: descripcionEdit,
          minutos: minutosEdit,
          fecha: fechaEdit,
          equipo: equipoEdit,
        }),
      });
    } catch (error) {
      console.log(`Error al actualizar la actividad, ${error}`);
    }
  };

  /**
   * manejo del evento de envio de formulario de editar actividad
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Actualizar actividad
    await actividadActualizada();
  };

  /**
   * redireccionamiento a componente Home
   */
  const navigate = useNavigate();
  const handleRedirection = () => {
    navigate("/");
  };
  return (
    <div className="bg-white flex flex-col justify-center items-center p-8 rounded-lg shadow-lg w-full h-screen">
      <form className="flex flex-col gap-4 md:mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col">
            <label htmlFor="usuario" className="text-gray-600 mb-2">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="usuario"
              value={usuarioEdit}
              onChange={(e) => setUsuarioEdit(e.target.value)}
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
              value={proyectoEdit}
              onChange={(e) => setProyectoEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
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
              value={compañiaEdit}
              onChange={(e) => setCompañiaEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
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
              value={tipoEdit}
              onChange={(e) => setTipoEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
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
              value={descripcionEdit}
              onChange={(e) => setDescripcionEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
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
              value={minutosEdit}
              onChange={(e) => setMinutosEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
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
              value={fechaEdit}
              onChange={(e) => setFechaEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
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
              value={equipoEdit}
              onChange={(e) => setEquipoEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Nombre de equipo"
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleRedirection}
          className="bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md mt-4 md:w-1/2 mx-auto md:mt-5"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};
