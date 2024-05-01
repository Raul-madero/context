import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
    const {user, setUser} = useUserContext();
   
    return user ?  <Outlet /> : <Navigate to="/" />;
};

export default LayoutPrivate;
