import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateLogin, loginUser } from '../../Redux/Actions/actions';
import { auth, googleProvider } from '../../Firebase/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import useForm from './UseForm/UseForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import styles from './LoginOrRegister.module.css';

const initialForm = {
    email: '',
    contraseña: '',
    nombre: '',
    apellido: '',
    telefono: '',
    edad: '',
};

const validationsForm = (initialForm) => {
    let errors = {};

    const regexname = /^[a-zA-Z ]+$/;

    if (!initialForm.nombre.trim()) {
        errors.nombre = 'El campo del nombre es requerido.';
    } else if (!regexname.test(initialForm.nombre.trim())) {
        errors.nombre = 'El campo del nombre solo acepta letras en Mayusculas y Minusculas';
    }

    if (!initialForm.apellido.trim()) {
        errors.apellido = 'El campo del apellido es requerido';
    } else if (!regexname.test(initialForm.apellido.trim())) {
        errors.apellido = 'El campo del apellido solo acepta letras en Mayusculas y Minusculas';
    }

    return errors;
}
const LoginOrRegister = () => {
    //! REGISTER !//
    const { register, error, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm, () => setIsLogin(true));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    //! Controladores del login !//
    const [login, setLogin] = useState({
        email: '',
        contraseña: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        contraseña: '',
    });

    const [userValue, setUserValue] = useState('');

    const changeHandler = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login,
            [property]: value,
        });
        setErrors(validateLogin({
            ...login,
            [property]: value,
        }));
    }

    const handleLogin = (e) => {
        e.preventDefault();

        // signInWithEmailAndPassword(auth, login.email, login.contraseña)
        // .then((data) => {
        //     setUserValue(data.user.email);
        //     localStorage.setItem('email', data.user.email);
        //     dispatch(validateLogin(login));
            
        //     if (userValue) {
        //         dispatch(loginUser());
        //         navigate('/');
        //     }
        // })
        // .catch((err) => console.log(err));
        setUserValue(login.email);
        localStorage.setItem('email', login.email);
        dispatch(validateLogin(login));

        if (userValue) {
            dispatch(loginUser());
            navigate('/');
        }
    }

    const handleLoginGoogle = (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
        .then((data) => {
            setUserValue(data.user.email);
            localStorage.setItem('email', data.user.email);
        });
    }

    const goBackToLogin = () => {
        setIsLogin(true);
    }

    return (
        <div className={styles.container}>
            {isLogin ? (
                <div className={styles.loginContainer}>
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleLogin}>
                        <input type='text' className={styles.input} placeholder='Email' onChange={changeHandler} name='email' value={login.email} />
                        {errors.email && <p>{errors.email}</p>}
                        <input type='password' className={styles.input} placeholder='Contraseña' onChange={changeHandler} name='contraseña' value={login.contraseña} />
                        {errors.contraseña && <p>{errors.contraseña}</p>}
                        <button className={styles.submitButton} onClick={handleLogin} >Iniciar sesión</button>
                        <p>¿No tienes una cuenta?<button id='registerLink' className={styles.registerButton} onClick={() => setIsLogin(false)}>Registrarse</button></p>
                        <p>O inicia sesión con<button className={styles.googleButton} onClick={handleLoginGoogle}>Google</button></p>
                    </form>
                </div>
            ) : (
                <div className={styles.registerContainer}>
                    <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon} onClick={goBackToLogin} />
                    <form onSubmit={handleSubmit}>
                        <div className={styles.div1}>
                            <p>Email</p>
                            <input type='text' name='email' placeholder='Email' value={register.email} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {error.email && <p>{error.email}</p>}

                        <div className={styles.div2}>
                            <p>Contraseña</p>
                            <input type='password' name='contraseña' placeholder='Contraseña' value={register.password} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {error.password && <p>{error.password}</p>}

                        <div className={styles.div3}>
                            <p>Nombre</p>
                            <input type='text' name='nombre' placeholder='Nombre' value={register.name} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {error.nombre && <p>{error.nombre}</p>}

                        <div className={styles.div4}>
                            <p>Apellido</p>
                            <input type='text' name='apellido' placeholder='Apellido' value={register.apellido} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {error.apellido && <p>{error.apellido}</p>}

                        <div className={styles.div5}>
                            <p>Telefono</p>
                            <input type='text' name='telefono' placeholder='Teléfono' value={register.telefono} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {error.telefono && <p>{error.telefono}</p>}

                        <div className={styles.div6}>
                            <p>Edad</p>
                            <input type='number' name='edad' placeholder='Edad' value={register.edad} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {error.edad && <p>{error.edad}</p>}

                        <div className={styles.div7}>
                            <button type='submit' className={styles.buttonRegister} >Registrarse</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default LoginOrRegister;