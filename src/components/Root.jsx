import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Root = () => {
    return (
        <div>
            <div className="md:w-11/12 mx-auto">
                <NavBar />
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;