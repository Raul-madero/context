import { Formik } from "formik";
import { login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";

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

  return (
    <div>
      <h1>Login</h1>
      <Formik 
        initialValues={{email: "", password:""}}
        onSubmit={onSubmit}>
        {
          ({values, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <label>
                Username:
                <input 
                  onChange={handleChange} 
                  value={values.email} 
                  type="email" 
                  name="email" 
                  placeholder="Ingresa tu email"/>
                </label>
                <label>
                Password:
                <input 
                  value={values.password} 
                  onChange={handleChange} 
                  type="password" 
                  name="password" 
                  placeholder="Ingresa tu contraseña"/>
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