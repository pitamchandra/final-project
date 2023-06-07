import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <div className="h-screen bg-white flex items-center justify-center">
            <progress className="progress progress-error w-56"></progress>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{form : location}} replace></Navigate>
};

export default Private;