import {UserProps} from "@/app/Components/Types/User/UserType";

export interface authContextType  {
    userConnected: UserProps | null;
    login: () => void;
    logout: () => void;
}

