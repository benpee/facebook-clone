import { useReducer, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children, initialState, reducer }) => {
    return (
        <AuthContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthValue = () => useContext(AuthContext);

export default useAuthValue