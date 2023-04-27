import React from "react";
import "./style.css";

const CreateRoutine = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-4xl text-yellow-500 mb-10">
          Crear Rutina de Ejercicios
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
            <select id="SelectOptions">
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
        ></div>
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
              <div>
                <div className="mb-1">
                  <span className=" text-lg">Ejercicio:&nbsp;&nbsp;</span>
                  <input
                    placeholder="Ingrese Nombre del Ejercicio"
                    style={{ width: 600 }}
                  ></input>
                </div>
                <div className="mb-1">
                  <span className=" text-lg">Series:&nbsp;&nbsp;</span>
                  <input
                    placeholder="Ingrese Cantidad de Series"
                    style={{ width: 600 }}
                  ></input>
                </div>
                <div className="mb-1">
                  <span className=" text-lg">Repeticiones:&nbsp;&nbsp;</span>
                  <input
                    placeholder="Ingrese Cantidad de Repeticiones"
                    style={{ width: 600 }}
                  ></input>
                </div>
                <div className="mb-1">
                  <span className=" text-lg">Tiempo de Descanso:&nbsp;&nbsp;</span>
                  <input
                    placeholder="Ingrese Tiempo de Descanso"
                    style={{ width: 600 }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-success">Confirmar Rutina</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoutine;
