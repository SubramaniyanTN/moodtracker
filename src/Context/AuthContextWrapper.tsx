import {createContext,useState,useContext} from 'react'

export type AuthContextType={
    isAuthenticated:boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext=createContext<AuthContextType>({} as AuthContextType)

const AuthContextWrapper:React.FC<{children:JSX.Element|JSX.Element[]}>=({children})=>{
    const [isAuthenticated,setIsAuthenticated]=useState<boolean>(false)
    return(
        <>
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }} >
        {children}
        </AuthContext.Provider>
        </>
    )
}

export default AuthContextWrapper;