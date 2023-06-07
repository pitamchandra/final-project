import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import Social from '../Shared/SocialLogin/Social';

const Register = () => {

    const {createUser, updateUserName} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location?.state?.form?.pathname);
    const path = location?.state?.form?.pathname || '/';

    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result => {

            console.log(result.user);
            updateUserName(data.name, data.photo)
            const createdUser = {name : data.name, email : data.email};
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(createdUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                }
            })
            
            
              navigate(path)
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                title: error?.message,
                showConfirmButton: false,
                timer: 1500
              })
              
        })
    };

    

    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content">
                <div className="text-center w-1/2 lg:text-left">
                    <img className='w-3/4' src={logoImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm bg-base-300">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center text-2xl font-semibold ">Register</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" {...register("name", { required: true } )} placeholder="type name" className="input rounded-none input-bordered"/>
                        {errors.name && <span className='text-red-500'>Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="photo" {...register("photo", { required: true } )} placeholder="type photo url" className="input rounded-none input-bordered"/>
                        {errors.photo && <span className='text-red-500'>Photo is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="type email" className="input rounded-none input-bordered"/>
                        {errors.email && <span className='text-red-500'>Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, minLength: 6 }, { pattern: /(?=.*[A-Z])/ })} placeholder="enter your password" className="input rounded-none input-bordered"/>
                        
                        {errors.password?.type === "minLength" && <span className='text-red-500'>Password at least 6 character</span>}
                        {errors.password?.type === "required" && <span className='text-red-500'>Password is required</span>}
                        {errors.password?.type === "pattern" && <span className='text-red-500'>Password will least one uppercase one lowercase one number and one special character</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div> 
                    <div className="form-control mt-6">
                        <input className='btn' type="submit" value="Register"/>
                    </div>
                </form>
                <p className='mt-4 text-center'>Already have an account? <Link to="/login" className='text-violet-500'>Login Now</Link></p>
                <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default Register;