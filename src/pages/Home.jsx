import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
    const { user, setUser } = useUserContext();
    const navigate = useNavigate();
    const handleClick = () => {
        setUser(true);
        navigate("/dashboard");
    }
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {
                !user && (
                    <button onClick={handleClick}>Login</button>
                )
            }
        </div>
    )
};

export default Home;
