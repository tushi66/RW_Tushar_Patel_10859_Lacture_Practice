import { Navigate } from "react-router";
import { useAuth } from "../Hooks/Costumhook";
import { Children } from "react";

const ProtectedRoute = ({children , adminOnly = false}) => {
    const{isAuthenticated , isAdmin , loading} = useAuth()

    if(loading){
        return null
    }

    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }

    if(adminOnly && !isAdmin){
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute