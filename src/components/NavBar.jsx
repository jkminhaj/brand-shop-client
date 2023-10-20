import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthProvider, { AuthContext } from "../AuthProvider";
import './NavBar.css'

const NavBar = () => {
    const {user , logOut} = useContext(AuthContext);
    console.log(user)
    const links = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/addproduct'><li>Add product</li></NavLink>
        <NavLink to='/mycart'><li>My cart</li></NavLink>
    </>
    const handleLogOut = () =>{
        logOut();
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {user.displayName}
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                </div>:
                 <Link to='/login'><button className='text-base bg-slate-800 font-semibold px-4 md:px-5 py-1 md:py-2 rounded-full  text-white '>Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;