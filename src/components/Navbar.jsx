import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
    const {user, setUser} = useUserContext();

    const handleClick = () => {
        setUser(false);
    }
    return (
        <nav>
            <NavLink className="mx-2" to="/">Home</NavLink>
            {
                user && (
                    <>
                        <span className="mx-2">|</span>
                        <NavLink className="mx-2" to="/dashboard">Dashboard</NavLink>
                        <button className="mx-2" onClick={handleClick}>Logout</button>
                    </>
                )
            }
        </nav>
    );
};

export default Navbar;
