import React from "react";

export const DeleteRegistro = ({ id }) => {
  /**
   * Eliminacion de actividad por id
   * Endpoint DELETE
   */

  const deleteActividad = async () => {
    try {
      // await fetch(`http://localhost:5000/api/actividades/${id}`, {
      await fetch(
        `https://backend-technova.onrender.com//api/actividades/${id}`,
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
  const handleSubmit = () => {
    deleteActividad();
  };
  return (
    <div>
      <h2>Deseas borrar?</h2>
      <button onClick={handleSubmit}>Si</button>
    </div>
  );
};
