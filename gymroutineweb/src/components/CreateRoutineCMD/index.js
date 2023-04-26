import React from 'react'
import "./style.css"

const CreateRoutine = () => {
  return (
    <div>
        <div className="text-center mb-10">
        <h1 className="text-4xl text-yellow-500 mb-10">
          Que toca Entrenar Hoy?
        </h1>
        <form className="mb-5">
          <div
            style={{
              backgroundColor: "yellow",
              display: "block",
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <span className="text-xl">*Ingrese el dia de la Semana</span>
            &nbsp;&nbsp;
            {
              //On change se debe de cambiar el valor de la variable "date" para que se pueda hacer la consulta a la base de datos.
            }
            <select id="SelectOptions" >
              <option value="Select" id="Select" selected disabled>
                Seleccione un Dia
              </option>
              <option id="DiaLunes" value="Lunes">
                Lunes
              </option>
              <option id="DiaMartes" value="Martes">
                Martes
              </option>
              <option id="DiaMiercoles" value="Miercoles">
                Miercoles
              </option>
              <option id="DiaJueves" value="Jueves">
                Jueves
              </option>
              <option id="DiaViernes" value="Viernes">
                Viernes
              </option>
              <option id="DiaSabado" value="Sabado">
                Sabado
              </option>
              <option id="DiaDomingo" value="Domingo">
                Domingo
              </option>
            </select>
          </div>
        </form>
        <div
          className="mb-5"
          style={{
            backgroundColor: "white",
            display: "block",
            borderRadius: 20,
          }}
        >
        </div>
        <div
          className="mb-5"
          style={{
            backgroundColor: "white",
            display: "block",
            borderRadius: 20,
          }}
        >
          <div>
            {
              // Aca va un mapeo de los ejercicios  de ese dia
            }
            <div>
              <div className="mb-1">
                <span>Empresa:&nbsp;&nbsp;</span>
                <span>Nombre del Corredor</span>
              </div>
              <div className="mb-1">
                <span>Telefono Empresa:&nbsp;&nbsp;</span>
                <span>Numero de Telefono</span>
              </div>
              <div className="mb-1">
                <span>Vendedor:&nbsp;&nbsp;</span>
                <span>Nombre del Corredor</span>
              </div>
              <div className="mb-1">
                <span>Telefono Vendedor:&nbsp;&nbsp;</span>
                <span>Numero de Telefono</span>
              </div>
              <div className="mb-1">
                <span>Hora Del Dia Aproximada:&nbsp;&nbsp;</span>
                <span>Hora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateRoutine