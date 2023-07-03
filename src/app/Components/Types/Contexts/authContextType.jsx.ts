export interface authContextType  {
    userConnected: boolean;
    login: () => void;
    logout: () => void;
};

export interface providerPropsType  {
    userConnected: boolean;
    login: () => void;
    logout: () => void;
};