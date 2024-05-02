import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const Home = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user]);

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
