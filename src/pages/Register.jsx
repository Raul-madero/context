import { useState } from "react";
import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useUserContext();

    useRedirectActiveUser(user, "/dashboard");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
          const credential = await register({ email: email, password });
          console.log(credential);
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div>
      <h1>register</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input onChange={(e) => setEmail(e.target.value)} value={user} type="email" name="username" placeholder="Ingresa tu email"/>
            </label>
            <label>
            Password:
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Ingresa tu contraseña"/>
            </label>
            <button type="submit">register</button>
        </form>
    </div>
  );
}
export default Register;