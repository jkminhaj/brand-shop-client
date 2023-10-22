import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

const BrandDetails = () => {
    const data = useLoaderData();
    console.log(data.length)
    
    return (
        <div>
            <Slider></Slider>
            {data.length?
            <div className="grid mt-4 md:mt-10 md:grid-cols-4 gap-4">{data.map(item=><ProductCard key={item._id} item={item}></ProductCard>)}</div>:
            <>
            <div className="md:py-32 space-y-5">
                <h1 className=" text-center font-semibold text-blue-600 text-6xl">Opps! no product found ,</h1>
                <p className="text-center">try to add few products</p>
            </div>
            </>}
        </div>
    );
};

export default BrandDetails;