import { useContext } from "react";
import Brands from "./home components/Brands";
import { AuthContext } from "../AuthProvider";

const Home = () => {
    const {lightTheme} = useContext(AuthContext)
    return (
        <div>
            <img src="https://www.pcstore.ae/wp-content/uploads/2023/03/Macebook-Laptop-Banner-1.png" className="rounded"></img>
            <Brands></Brands>
        </div>
    );
};

export default Home;