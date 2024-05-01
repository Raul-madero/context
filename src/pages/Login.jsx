import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user, password);
    }

  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input onChange={(e) => setUser(e.target.value)} value={user} type="email" name="username" placeholder="Ingresa tu email"/>
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