
import { createContext, useState, useContext, useEffect } from "react";
import { SESSION_URL, USER_URL } from "../config/config";

const LoginContext = createContext(null);

export default function AuthContext({children}) {
   
    const [loginUser, setLoginUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => loginUser?.role === "ADMIN";

    const isCreator = () => loginUser?.role === "CREATOR";

    const signIn = (token, user) => {
    
        setToken(token);
        setLoginUser(user);
        setIsAuthenticated(true);

    }

    const signOut = () => {
      
        removeToken();
        setLoginUser({});
        setIsAuthenticated(false);

    }

    const getAuthHeaders = (headers = {}) => {
        
        return {...headers, Authorization: `Bearer ${getToken()}`}
    };

    
    useEffect(() => {
        
        const options = {
            headers: getAuthHeaders()
        };

        // Si ni siquiera hay token guardado, no hacemos la petición
        getToken() && fetch(SESSION_URL, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => signIn(data.token, data.user)) // Token e info renovada
            .catch(() => signOut()); // Limpiamos la sesión
        
        // El siguiente comentario (eslint...) es para deshabilitar el warning de "missing dependencies"
        // ya que no necesitamos incluir las dependencias que nos pide en este caso.

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    
    const [creators, setCreators] = useState([]);

    const getCreators = async () => {

        const response = await fetch(USER_URL+"creators")
        const creators = await response.json()
        setCreators(creators.results)

    }


    const contextValue = {
        loginUser,
        isAuthenticated,
        isAdmin,
        getCreators,
        getToken,
        signIn,
        signOut,
        getAuthHeaders,
        isCreator,
        creators
    };

    /**
     * Envuelve a todos los hijos con el Provider del contexto, enviando 
     * por value un objeto con todas las propiedades / funciones
     * que se quieran exponer en el árbol.
     */

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}

const useAuthContext = () => useContext(LoginContext);

export {useAuthContext};