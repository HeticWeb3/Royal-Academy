"use client"
import {authContextType} from "@/app/Components/Types";
import {createContext,useContext,useState,useLayoutEffect} from "react";
import { useRouter } from "next/navigation";
import {getCookie, hasCookie, setCookie, deleteCookie} from 'cookies-next';
import {getAccessToken} from '@/Utils/Hooks/User/getAccessToken'
import {UserProps} from "@/app/Components/Types/User/UserType";

const authContextDefaultValues: authContextType = {
    userConnected: null,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
    const router = useRouter();
    const [userConnected, setUserConnected] = useState<null | UserProps>(null);

    const getUserInfo = async () => {
        const response = await fetch('http://localhost:3000/api/user/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('accesstoken')}`
            },
        });

        if(response.ok){
            const data = await response.json();
            setUserConnected(data)
        }
    }

    useLayoutEffect(() => {
            if (!hasCookie('accesstoken')) {
                getAccessToken()
                    .then(response => {
                        if (response?.ok) {
                            response?.json().then((data) => {
                                 setCookie('accesstoken', data.accessToken,{maxAge:60 * 60 * 24,sameSite:true});
                                 getUserInfo()
                            })
                        }
                        else {
                           router.push('/login')
                        }
                    })
            } else {
                getUserInfo();
            }
      
    }, []);

    const login = () => {
        getUserInfo();
    };

    const logout = () => {
        deleteCookie('accesstoken')
        setUserConnected(null);
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