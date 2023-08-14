import {createContext,useState,useContext} from 'react'

export type AuthContextType={
    isAuthenticated:boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    login: () => void;
}

export const AuthContext=createContext<AuthContextType>({} as AuthContextType)

const AuthContextWrapper:React.FC<{children:JSX.Element|JSX.Element[]}>=({children})=>{
    const [isAuthenticated,setIsAuthenticated]=useState<boolean>(false)
    const login=()=>{
        setIsAuthenticated(true)
    }
    return(
        <>
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            login
        }} >
        {children}
        </AuthContext.Provider>
        </>
    )
}

export default AuthContextWrapper;