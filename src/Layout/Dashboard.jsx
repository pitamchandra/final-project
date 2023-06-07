import {NavLink, Outlet } from "react-router-dom";
import { FaBars, FaCalendar, FaHome, FaMoneyBill, FaShopify, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import useCard from "../hooks/useCard";

const Dashboard = () => {
    const [cart] = useCard()
    // Todo : load data form the server isAdmin will diynamic
    const isAdmin = true;
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center p-10">
                
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80  text-base-content">
                
                {isAdmin ? <>
                    <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/dashboard/reservation"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : "" } to="/dashboard/history"><FaWallet></FaWallet> Manage item</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : "" } to="dashboard/users"><FaUsers></FaUsers> all users</NavLink></li>
                
                </>:<>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/"><FaHome></FaHome> User Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/dashboard/reservation"><FaCalendar></FaCalendar> reservation</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : "" } to="/dashboard/history"><FaMoneyBill></FaMoneyBill> payment history</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="dashboard/cart"><FaShoppingCart></FaShoppingCart> my cart <div className="badge badge-secondary">+{cart?.length || 0}</div> </NavLink></li>
                </>}
                <div className="divider"></div>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/"><FaHome></FaHome> User Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/menu"><FaBars></FaBars> menu</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/shop"><FaShopify></FaShopify> Shop</NavLink></li>
                </ul>
            
            </div>
        </div>
        </>
    );
};

export default Dashboard;