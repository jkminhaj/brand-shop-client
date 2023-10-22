import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Cart = () => {
    const [cartData, setCartData] = useState(useLoaderData());
     // sweet toast
     const addToCartNotify = (e) => toast(e,
        {
            icon: '',
            style: {
                borderRadius: '50px',
                background: 'white',
                color: 'red',
            },
        });
    const handleRemove = id => {
        fetch(`https://tech-land-server-3jdnwlzr8-minhajul-islams-projects.vercel.app/cart/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    addToCartNotify('Item deleted successfully')
                    const remaining = cartData.filter(item => item._id !== id);
                    setCartData(remaining)
                }

            })
    }
   
    console.log(cartData)
    return (
        <div className="border shadow-sm rounded mt-7 p-4 md:p-10 md:py-10 md:my-12">
            <h1 className="text-3xl mb-5 text-center font-medium">Cart ( {cartData.length} items ) </h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-lg">
                            <tr>

                                <th className="font-normal text-black">Name</th>
                                <th className="font-normal text-black">Description</th>
                                <th className="font-normal text-black">Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* row 1 */}
                            {
                                cartData.map(item => <tr key={item._id}>

                                    <td >
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} />
                                                </div>
                                            </div>
                                            <div className="font-normal text-black">
                                                <div className="font-bold">{item.name}</div>
                                                <div className="text-sm opacity-50">{item.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="font-normal text-base text-black">{item.short_description}</p>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleRemove(item._id)} className="btn btn-ghost btn-xs">Remove</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Cart;