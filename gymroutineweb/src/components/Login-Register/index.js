import React from "react";
import ImageLogin from "../../assets/img/ImageLogin.jpg";

const Login = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
            `url(${ImageLogin})`,
      }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 opacity-80">
            <div className="card-body">
              <div className="form-control">
                <span className="mb-3 text-xl">Iniciar Sesion Para ver Rutina</span>
                <label className="label">
                  <span className="label-text">Correo Electronico</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  type="text"
                  placeholder="Contraseña"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Olvidaste la Contraseña?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-success">Iniciar Sesión</button>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
