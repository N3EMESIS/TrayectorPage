import React, { useState } from "react";
import { auth } from "../../../src/Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser } from '../../Redux/Actions/actions'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialForm = {
  nombre: "",
  apellido: "",
  email: "",
  contraseña: "",
  ciudad: "",
  direccion: "",
  telefono: "",
  edad: "",
  dni: "",
};

const LoginForm = ({ handleCloseModal, setView }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      alert("Missing data...");
    } else {
      createUserWithEmailAndPassword(auth, form.email, form.contraseña)
        .then((userCredential) => {
          setView("login");
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch(registerUser(form));
    }
  };

  const validationsForm = (form) => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexname = /^[a-zA-Z ]+$/;
    const regexDireccion = /^[a-zA-Z0-9\s]+$/;

    // Resto de validaciones...

    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    const fieldErrors = validationsForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: fieldErrors[name] });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const fieldErrors = validationsForm(form);
    if (!value.trim()) {
      delete fieldErrors[name];
    }
    setErrors({ ...errors, [name]: fieldErrors[name] });
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        {/* Resto de tu formulario */}
        <div className="form-group">
          <label htmlFor="typeEmailX-2">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email here..."
            name="email"
            id="typeEmailX-2"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Resto de tus campos */}
        
        <button className="button2" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
