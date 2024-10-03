import { Outlet } from "react-router-dom";
import SideNavbar from "../Components/SideNavbar/SideNavbar";

const Root = () => {
    return (
        <div className="flex h-screen gap-2 md:gap-4 max-w-[1920px]">
            <div className="w-[20%]">
                <SideNavbar />
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;