import { Formik } from "formik";
import { login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import * as Yup from "yup";

const Login = () => {
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/dashboard");

  const onSubmit = async (values) => {
    console.log(values);
    try {
        const credential = await login({email: values.email, password: values.password});
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
      <h1>Login</h1>
      <Formik 
        initialValues={{email: "", password:""}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {
          ({values, handleChange, handleSubmit, errors, touched, handleBlur}) => (
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
                <button type="submit">Login</button>
            </form>
          )
        }
      </Formik>
    </div>
  );
}
export default Login;