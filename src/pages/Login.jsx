import { useState } from "react";
import { login } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useUserContext();
    useRedirectActiveUser(user, "/dashboard");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const credential = await login({ email, password });
          console.log(credential);
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="username" placeholder="Ingresa tu email"/>
            </label>
            <label>
            Password:
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Ingresa tu contraseña"/>
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
  );
}
export default Login;