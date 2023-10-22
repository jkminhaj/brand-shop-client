import { useEffect, useState } from "react";
import Brand from "./Brand";
import Slider from "./Slider";

const Brands = () => {
    const [brands , setBrands] = useState([])
    useEffect(()=>{
        fetch('https://tech-land-server-3jdnwlzr8-minhajul-islams-projects.vercel.app/brand')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <div >
            
            <div className="grid grid-cols-1 md:grid-cols-3  my-8">
            {
                brands.map(brand=><Brand key={brand._id} brand={brand}></Brand>)
            }
            </div>
        </div>
    );
};

export default Brands;


