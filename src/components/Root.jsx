import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext } from "react";
import { auth } from "../../firebase.config";
import { AuthContext } from "../AuthProvider";
import MiniBanner from "./home components/MiniBanner";

const Root = () => {
    const {lightTheme} = useContext(AuthContext)
    return (
        <div  data-theme={lightTheme?'light':'dark'}>
            <div className="md:w-11/12 mx-auto">
                <NavBar />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;