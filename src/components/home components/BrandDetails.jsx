import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <p>I am {data.length} detais</p>
            <div className="grid md:grid-cols-4 gap-4">{data.map(item=><ProductCard key={item._id} item={item}></ProductCard>)}</div>
        </div>
    );
};

export default BrandDetails;