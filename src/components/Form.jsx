import { useState } from "react";
import { login } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";

const Form = ({ children, initialState }) => {
    const [values, setValues] = useState(initialState);

    

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    return children({values, handleChange, handleSubmit});
}
export default Form;