"use client"
import {authContextType,providerPropsType} from "@/app/Components/Types";
import {createContext,useContext,useState,useLayoutEffect} from "react";
import {hasCookie, setCookie} from 'cookies-next';
import {getAccessToken} from '@/Utils/Hooks/User/getAccessToken'

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

    useLayoutEffect(() => {
            if (!userConnected) {
                getAccessToken()
                    .then(response=> {
                        response.json().then((data) => {
                             setCookie('accesstoken', data.accessToken,{maxAge:60 * 60 * 24,sameSite:true});
                        })
                    })
            }
            []
    });
    
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