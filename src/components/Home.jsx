import { useContext } from "react";
import Brands from "./home components/Brands";
import { AuthContext } from "../AuthProvider";
import MiniBanner from "./home components/MiniBanner";
import Banner from "./home components/Banner";

const Home = () => {
    const {lightTheme} = useContext(AuthContext)
    return (
        <div>
            <MiniBanner></MiniBanner>
            <Brands></Brands>
            <Banner></Banner>
            <img src="https://www.pcstore.ae/wp-content/uploads/2023/03/Macebook-Laptop-Banner-1.png" className="rounded"></img>
        </div>
    );
};

export default Home;