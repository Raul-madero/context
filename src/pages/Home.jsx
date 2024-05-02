import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
    const {user} = useUserContext();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register");
    }  

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {
                !user && (
                    <>
                        <button onClick={handleClick}>Login</button>
                        <button onClick={handleRegister}>Register</button>
                    </>
                )
            }
        </div>
    )
};

export default Home;
