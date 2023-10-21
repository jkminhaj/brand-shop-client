import { useLoaderData } from "react-router-dom";

const ProductCardDetails = () => {
    const {brand_name, details , _id , img , name , price , rating_value,type , short_description,is_available}  = useLoaderData()[0]
    
    return (
        <div>
            <p>hi {name}</p>
        </div>
    );
};

export default ProductCardDetails;