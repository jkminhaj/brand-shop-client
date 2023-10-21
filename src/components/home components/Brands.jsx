import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands , setBrands] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/brand')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-28">
            {
                brands.map(brand=><Brand key={brand._id} brand={brand}></Brand>)
            }
            </div>
        </div>
    );
};

export default Brands;


