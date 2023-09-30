import style from "./LoginSignup.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { validateLogin, loginUser } from "../../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../Firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    contraseña: "",
  });

  const [error, setError] = useState({
    email: "",
    constraseña: ""
  });

  const [userValue, setUserValue] = useState("");
  console.log(userValue);

  const handleButtonAccess = async (event) => {
    event.preventDefault();
    const response = await dispatch(validateLogin(login));

    if (typeof response === "object") {
      dispatch(loginUser());
      navigate("/");
    }
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setLogin({
      ...login,
      [property]: value,
    });
    setError(validateLogin({ ...login, [property]: value }));
  };

  const handleOnClick = () => {
    navigate("/Register");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, login.email, login.contraseña)
      .then((data) => {
        setUserValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        dispatch(validateLogin(login));
        if (userValue) {
          dispatch(loginUser());
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleLogGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider).then((data) => {
      setUserValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  return (
    <div className={style.container}>
        <form className={style.form}>
            <div className={style.form_front}>
                <div className={style.form_details}>Login</div>

                <div>
                    <label htmlFor='email'>Usuario</label>
                    <input type='text' className={error.email ? style.inputError : style.input} placeholder='Usuario' onChange={changeHandler} name='email' value={login.email} />
                    {error.email && (
                        <span className={style.errorMessage}>{error.email}</span>
                    )}
                </div>

                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' className={error.password ? style.inputError : style.input} placeholder='Contraseña' onChange={changeHandler} name='contraseña' value={login.contraseña} />
                    {error.password && (
                        <span className={style.errorMessage}>{error.password}</span>
                    )}
                </div>

                <button className={style.btn} onClick={handleLogin}>
                    Login
                </button>
                <button className={style.btn} type="button" onClick={handleLogGoogle}>
                    Google
                </button>
                <div className={style.switch}>
                    Don't have an account?{" "}
                <label htmlFor="signup_toggle" className={style.signup_tog}>
                    <div className={style.signup} onClick={handleOnClick}>
                        Sign Up
                    </div>
                </label>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Login;
