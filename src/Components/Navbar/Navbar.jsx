import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res)
            })
            .catch(console.error())
    }

    const routeLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#gallery">Gallery</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="register">Register</Link></li>

    </>

    return (

        <div className="navbar bg-base-100 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-medium text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {routeLinks}
                    </ul>
                </div>
                <img className="lg:w-44" src="https://helthify-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2022/06/logo-1.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-medium text-xl menu-horizontal px-1">
                    {routeLinks}
                </ul>
            </div>
            
            <div className="navbar-end">

            {
                user && <p>{user.email}</p>
            }

                {
                    user ?
                        <button onClick={handleLogout} className="btn  bg-black btn-secondary text-white">Log Out</button>
                        :
                        <NavLink to="/login"><button className="btn btn-secondary text-white">Login</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;