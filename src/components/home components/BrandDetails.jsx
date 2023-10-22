import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

const BrandDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Slider></Slider>
            <div className="grid mt-4 md:mt-10 md:grid-cols-4 gap-4">{data.map(item=><ProductCard key={item._id} item={item}></ProductCard>)}</div>
        </div>
    );
};

export default BrandDetails;