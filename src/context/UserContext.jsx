import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(true);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext);