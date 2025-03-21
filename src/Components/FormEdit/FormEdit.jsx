import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

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
      // await fetch(`http://localhost:5000/api/actividades/${id}`, {
      await fetch(
        `https://backend-technova-6smf.onrender.com/api/actividades/${id}`,
        {
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
        }
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Actividad Editada",
        showConfirmButton: false,
        timer: 1500,
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
    actividadActualizada();
  };

  /**
   * redireccionamiento a componente Home
   */
  const navigate = useNavigate();
  const handleRedirection = () => {
    navigate("/");
  };
  return (
    <motion.div
      className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg w-full h-screen"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-center text-primary mb-6">
        Editar Registro De Actividad
      </h2>
      <p className="text-primary text-sm md:mb-4 font-semibold">
        ¡Todos los campos deben estar completados para editar correctamente!
      </p>
      <form className="flex flex-col gap-4 md:mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between gap-5">
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
              required
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
              required
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
              required
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
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-5">
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
              required
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
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fecha" className="text-gray-600 mb-2">
              Fecha de actividad
            </label>
            <input
              type="date"
              id="fecha"
              value={fechaEdit}
              onChange={(e) => setFechaEdit(e.target.value)}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Fecha de actividad"
              required
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
              required
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
    </motion.div>
  );
};
