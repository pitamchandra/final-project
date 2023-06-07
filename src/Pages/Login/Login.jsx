import { useContext, useEffect, useState } from 'react';
import logoImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Social from '../Shared/SocialLogin/Social';

const Login = () => {
    const {login} = useContext(AuthContext)
 
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location?.state?.form?.pathname);
    const path = location?.state?.form?.pathname || "/";

    useEffect(() =>{
        loadCaptchaEnginge(6)
    }, [])

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(path)
        })
        .catch(error =>{
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              })
        })
    }

    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        console.log(e.target.value);

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content">
                <div className="text-center w-1/2 lg:text-left">
                    <img className='w-3/4' src={logoImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm bg-base-300">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center text-2xl font-semibold ">Login</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="type email" className="input rounded-none input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="enter your password" className="input rounded-none input-bordered" required/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div> 
                    <div className="form-control">
                        <label className="label">
                        <LoadCanvasTemplate />
                        </label>
                        <input type="text" onBlur={handleValidateCaptcha} placeholder="enter your password" className="input rounded-none input-bordered" />
                        
                    </div> 
                    <div className="form-control mt-6">
                        <input className='btn' type="submit" value="Login" disabled={disabled}/>
                    </div>
                </form>
                <p className='mt-4 text-center'>Don&apos;t have an account? <Link to="/register" state={{form : location?.state?.form}} className='text-violet-500'>Register Now</Link></p>
                <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default Login;