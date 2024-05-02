import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

//Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { set } from "firebase/database";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        console.log(user);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
    })
    return unsubscribe;
    }, [user]);

    if (user === false) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext);