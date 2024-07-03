import { NavLink } from "react-router-dom";



const Navbar = () => {


    const navItems =
        <>
            <NavLink to='/' end className={({ isActive }) => isActive ? 'text-sky-500 border-b-2 border-sky-500' : 'border-gray-500'}>Home</NavLink>


        </>
    return (
        <div className="w-full h-[50px] fixed z-50 flex items-center justify-center">
            <div className="navbar container mx-auto min-w-12  flex justify-center">

                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Name</a>
                </div>

                <div className="navbar-end items-center gap-4 hidden lg:inline-flex font-medium">
                    {navItems}

                </div>
            </div>
        </div>
    );
};

export default Navbar;