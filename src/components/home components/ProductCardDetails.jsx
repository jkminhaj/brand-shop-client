import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const ProductCardDetails = () => {
    const { brand_name, details, img, name, price, rating_value, type, short_description, is_available } = useLoaderData()[0]
    if (details) {
        const keys = 'key_features';
        const features = details[keys];
        var [firstFeature, secondFeature, thirdFeature, forthFeature] = features
    }
    // sweet toast
    const addToCartNotify = (e) => toast(e,
        {
            icon: '',
            style: {
                borderRadius: '50px',
                background: 'white',
                color: 'blue',
            },
        });
    const handleAddCart = () => {
        const cartItem = { name, brand_name, img, price, type, short_description }
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    addToCartNotify('Item added in the cart')
                }
            })
    }

    return (
        <div className="flex md:flex-row flex-col-reverse justify-between items-start">
            <div>
                <div className="flex md:mt-8">
                    <h1 className="md:text-7xl  md:font-medium">{name}</h1>
                    <div className="flex items-center rating rating-xs md:rating-sm badge gap-1">
                        <p className="md:text-lg">{rating_value}</p>
                        <input type="radio" className="mask mask-star" />
                    </div>
                </div>
                <p className="md:text-3xl md:mt-5 font-medium text-blue-500">{brand_name}</p>
                <p className="badge">{type}</p>
                <p className="md:mt-5">{short_description}</p>
                <div className="flex items-center gap-6 mt-6">
                    <p className="text-yellow-700">Price : {price}$</p>
                    <button className="hover:bg-slate-50 px-3 py-1 border rounded-lg" onClick={handleAddCart}>Add to cart</button>
                </div>
                {
                    details &&
                    <>
                        <p className="md:mt-4 text-2xl font-medium mb-4">Key Features</p>
                        <ul>
                            <li>{firstFeature}</li>
                            <li>{secondFeature}</li>
                            <li>{thirdFeature}</li>
                            <li>{forthFeature}</li>
                        </ul>
                    </>
                }
            </div>
            <div>
                <img className="md:w-96  rounded mt-9" src={img} alt="" />
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default ProductCardDetails;
{/* <p>hi {name}</p> */ }
//