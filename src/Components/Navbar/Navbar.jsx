import { NavLink } from "react-router-dom";



const Navbar = () => {


    const navItems =
        <>
            <NavLink to='/' end className={({ isActive }) => isActive ? 'text-black border-b-2 border-black' : 'text-gray-500 border-gray-500'}>Home</NavLink>

            <NavLink to='/blogs' end className={({ isActive }) => isActive ? 'text-black border-b-2 border-black' : 'text-gray-500 border-gray-500'}>Blogs</NavLink>


        </>
    return (
        <div className="bg-amber-500 w-full h-[50px] fixed z-50 flex items-center justify-center">
            <div className="navbar container mx-auto min-w-12  flex justify-center">

                <div className="navbar-start">
                    <a className="font-semibold text-xl">Hasibul Islam</a>
                </div>

                <div className="navbar-end items-center gap-4 hidden lg:inline-flex font-medium">
                    {navItems}

                </div>
            </div>
        </div>
    );
};

export default Navbar;