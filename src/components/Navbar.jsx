import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext, useUserContext } from "../context/UserContext";

const Navbar = () => {
    const {user, setUser} = useUserContext();
    return (
        <nav>
            <NavLink className="mx-2" to="/">Home</NavLink>
            {
                user && (
                    <>
                        <span className="mx-2">|</span>
                        <NavLink className="mx-2" to="/dashboard">Dashboard</NavLink>
                        <button className="mx-2" onClick={() => setUser(false)}>Logout</button>
                    </>
                )
            }
        </nav>
    );
};

export default Navbar;
