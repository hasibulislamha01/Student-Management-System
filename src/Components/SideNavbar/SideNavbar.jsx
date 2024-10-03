import { RiShutDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const pageLinks = [
    { title: 'Add Student', link: '/addStudent' },
    { title: 'Manage Student', link: '/manageStudent' },
]

const SideNavbar = () => {


    return (
        <div className="h-screen w-full mt-12">

            {/* user based menues */}
            {
                
                    <div className="flex flex-col gap-[100px] px-2">


                        <div className="flex flex-col justify-center items-center gap-2 font-bold">
                            {
                                pageLinks?.map(route =>
                                    <NavLink key={route.link} to={route.link} className={({ isActive }) => isActive ? 'w-full text-white bg-primary ' : 'w-full bg-white text-primary '}>
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <h3 className="text-2xl md:text-base">{route.icon}</h3>
                                            <h3 className='hidden md:block'>{route.title}</h3>
                                        </div>
                                    </NavLink>
                                )
                            }
                        </div>

                        <div className="w-full flex flex-col justify-start  items-center md:items-start gap-2 pt-4 border-t-2">
                           
                            <button className="text-2xl md:text-base flex items-center gap-2">
                                <RiShutDownLine />
                                <span className="hidden md:block text-primary font-bold">Logout</span>
                            </button>
                            
                        </div>

                    </div>
                    

                    
            }
        </div>
    );
};

export default SideNavbar;