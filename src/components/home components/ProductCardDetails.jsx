import { Link, useLoaderData } from "react-router-dom";

const ProductCardDetails = () => {
    const {brand_name, details , _id , img , name , price , rating_value,type , short_description,is_available}  = useLoaderData()[0]
    const handleAddCart = () =>{
        const cartItem = {name, brand_name , img , price, type , short_description}
        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartItem)
        })
    }
    
    return (
        <div>
            <p>hi {name}</p>
            <button onClick={handleAddCart}>Add to cart</button>
        </div>
    );
};

export default ProductCardDetails;