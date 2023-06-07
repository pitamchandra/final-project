
import { useContext } from 'react';
import { FaGooglePlus } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location?.state?.form?.pathname || '/';
    const handleSocialLogin = () =>{
        googleLogin()
        .then(result =>{
            const loggedUser = { name : result?.user?.displayName , email : result?.user?.email};
            console.log(loggedUser);
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(() => {
                navigate(path)
                
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                
            })
            
            
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div className="w-full text-center my-6">
        <button className="btn btn-circle btn-outline" onClick={handleSocialLogin}>
            <FaGooglePlus></FaGooglePlus>
        </button>
        </div>
    );
};

export default Social;