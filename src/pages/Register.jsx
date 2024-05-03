import { useState } from "react";
import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
    const { user } = useUserContext();
    useRedirectActiveUser(user, "/dashboard");

    const onSubmit = async (values) => {
        try {
          const credential = await register({email: values.email, password: values.password});
          console.log(credential);
        } catch (error) {
          console.log(error);
        }
    }
    const validationSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().trim().min(6).required("Required")
    });
  return (
    <div>
      <h1>Register</h1>
      <Formik 
        initialValues={{email: "", password: ""}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {
          ({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
            <form onSubmit={handleSubmit}>
                <label>
                Username:
                <input 
                  onChange={handleChange} 
                  value={values.email} 
                  type="email" 
                  name="email" 
                  placeholder="Ingresa tu email"
                  onBlur={handleBlur}/>
                  {errors.email && touched.email && errors.email}
                </label>
                <label>
                Password:
                <input 
                  value={values.password} 
                  onChange={handleChange} 
                  type="password" 
                  name="password" 
                  placeholder="Ingresa tu contraseña"
                  onBlur={handleBlur}/>
                  {errors.password && touched.password && errors.password}
                </label>
                <button type="submit">Register</button>
            </form>
          )
        }
      </Formik>
    </div>
  );
}
export default Register;