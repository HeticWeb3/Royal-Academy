import {UserProps} from "@/app/Components/Types/User/UserType";
import {UserDataProps} from "@/app/Components/Types";

export interface authContextType  {
    userConnected: UserDataProps | null;
    login: () => void;
    logout: () => void;
}

