import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    
    const location = useLocation()

    const loginPage = location.pathname.includes('login') || location.pathname.includes('register')
    console.log(loginPage);

    return (
        <div className='max-w-screen-xl mx-auto'>
            {loginPage || <Navbar></Navbar>}
            <Outlet></Outlet>
            {loginPage || <Footer></Footer>}
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;