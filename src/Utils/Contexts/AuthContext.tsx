"use client"
import {authContextType,providerPropsType} from "@/app/Components/Types";
import {createContext,useContext,useState} from "react";
import { hasCookie } from 'cookies-next';

const authContextDefaultValues: authContextType = {
    userConnected: false,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: providerPropsType) {

    const [userConnected, setUserConnected] = useState<boolean>(hasCookie('accesstoken'));

    const login = () => {
        setUserConnected(true);
    };

    const logout = () => {
        setUserConnected(false);
    };

    const value = {
        userConnected,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthProvider;