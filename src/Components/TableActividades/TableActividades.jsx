import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const Registros = () => {
  const [actividades, setActividades] = useState([]); //estado para almacenar los registros
  const [dataEdit, setDataEdit] = useState(""); //manejo de informacion para editar activida
  const [dataDelete, setDelete] = useState(""); //manejo de id de eliminacion

  /**
   * manejo de peticion a la api para obtener todos las actividades laborales
   */
  useEffect(() => {
    const obtenerActividades = async () => {
      try {
        // const response = await fetch("http://localhost:5000/api/actividades");
        const response = await fetch(
          "https://backend-technova-6smf.onrender.com/api/actividades"
        );
        if (!response.ok) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al obtener todas las actividades!",
          });
        }
        const data = await response.json();
        setActividades(data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerActividades();
  });

  /**
   * trae objeto de actividad seleccionada por boton editar
   * Redirecciona a componente FormEdit
   */
  const navigate = useNavigate();
  const handleEdit = (actividad) => {
    handleDataEdit(actividad);
    navigate(`/editarActividad/${actividad._id}`);
  };

  /**
   * manejo de data de editar una actividad
   */
  useEffect(() => {
    if (dataEdit) {
      console.log(dataEdit._id);
    }
  }, [dataEdit]);
  const handleDataEdit = (actividad) => {
    setDataEdit(actividad);
  };

  /**
   * manejo de data para borrar una actividad
   */
  const deleteActividad = async (id) => {
    try {
      // await fetch(`http://localhost:5000/api/actividades/${id}`, {
      await fetch(
        `https://backend-technova-6smf.onrender.com/api/actividades/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * alerta de confirmacion para eliminar actividad
   */
  useEffect(() => {
    if (dataDelete) {
      console.log(dataDelete);
      Swal.fire({
        title: "Deseas eliminar la actividad?",
        text: "¡No podrás revertir esto!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "La actividad ha sido borrada correctamente",
            icon: "success",
          });
          deleteActividad(dataDelete);
        }
      });
    }
  }, [dataDelete]);

  const handleDelete = (id) => {
    setDelete(id);
  };
  return (
    <div className="">
      <h2 className="md:text-5xl text-primary font-semibold text-center md:mt-8">
        Actividades Laborales TechNova
      </h2>

      <div className="overflow-x-auto md:mt-16">
        <div className="">
          <Link
            to="/registrarActividad"
            className="bg-green-500 hover:text-white float-end hover:bg-green-600  md:px-4 md:py-2 rounded-sm font-semibold transition-all
            ease-in-out duration-300"
          >
            Agregar
          </Link>
        </div>
        <table className="w-full border border-gray-400 md:overflow-hidden md:mt-12">
          <thead className="bg-primary">
            <tr className="border-b border-gray-400 text-white">
              <th className="px-4 py-2 text-left">Usuario</th>
              <th className="px-4 py-2 text-left">Proyecto</th>
              <th className="px-4 py-2 text-left">Compañía</th>
              <th className="px-4 py-2 text-left">Tipo</th>
              <th className="px-4 py-2 text-left">Descripción</th>
              <th className="px-4 py-2 text-left">Minutos</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Equipo</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {actividades.map((actividad) => (
              <tr key={actividad._id} className="border border-gray-400">
                <td className="px-4 py-2  border border-gray-400">
                  {actividad.usuario}
                </td>
                <td className="px-4 py-2  border border-gray-400">
                  {actividad.proyecto}
                </td>
                <td className="px-4 py-2  border border-gray-400">
                  {actividad.compañia}
                </td>
                <td className="px-4 py-2  border border-gray-400">
                  {actividad.tipo}
                </td>
                <td className="px-4 py-2  border border-gray-400">
                  {actividad.descripcion}
                </td>
                <td className="px-4 py-2  border border-gray-400">
                  {actividad.minutos}
                </td>
                <td className="px-2 py-2  border border-gray-400 text-sm">
                  {actividad.fecha}
                </td>
                <td className="px-4 py-2  border border-gray-400">
                  {actividad.equipo}
                </td>
                <td className="px-4 py-2  flex gap-5">
                  <button
                    onClick={() => handleEdit(actividad)}
                    className="bg-sky-500 text-white py-1 px-4 rounded hover:bg-sky-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(actividad._id)}
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
