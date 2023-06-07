import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartPlus } from 'react-icons/fa';
import useCard from "../../../hooks/useCard";

const Navbar = () => {
    const {user, logOut } = useContext(AuthContext)
    const [cart] = useCard()
    const navigate = useNavigate()
    const handleLogout = () =>{
        logOut()
        .then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Logout Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/login')
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const li = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500" : ""}> Home </NavLink></li>
        <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-yellow-500" : ""}>Our Menu </NavLink></li>
        <li><NavLink to="/order/salad" className={({ isActive }) => isActive ? "text-yellow-500" : ""}> Order </NavLink></li>
        <li>
        <Link to="/dashboard/dashboard/cart" className="block"><button className="flex items-center gap-2">
            <FaCartPlus></FaCartPlus>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </button></Link>
        </li>
        {
            user ? <>
            <li><button onClick={handleLogout} className="btn"> LogOut </button></li>
            </> : <>
            <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow-500" : ""}> Login </NavLink></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-20 w-full top-0 bg-opacity-40 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {
                        li
                    }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        <div className="avatar">
                            <div className="w-12 bg-gray-500 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    }
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;