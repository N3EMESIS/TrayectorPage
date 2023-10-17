import { useState } from "react";
// import { auth } from "../../../Firebase/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser } from "../../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
// import { sendEmail } from "../../../Redux/Actions/actions";

const useForm = (initialForm, validationsForm, onRegisterSuccess) => {
    const [register, setRegister] = useState(initialForm);
    const [error, serError] = useState({});
    const dispatch = useDispatch();

    //! AGREGAR A FORM LOS DEL EVENTO Y VALUE
    const handleChange = (event) => {
        const { name, value } = event.target;

        setRegister({ ...register, [name]: value });
    };

    const handleBlur = (event) => {
        handleChange(event);
        serError(validationsForm(register));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // createUserWithEmailAndPassword(auth, register.email, register.contraseña)
        // .then((userCredential) => {
        //     console.log(userCredential);
        //     dispatch(sendEmail(userCredential, "register"));
        //     navigate("/");
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        dispatch(registerUser(register))
        .then(() => {
            if (typeof onRegisterSuccess === 'function'){
                onRegisterSuccess();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return {
        handleChange,
        handleBlur,
        handleSubmit,
        register,
        error,
    };
};

export default useForm;