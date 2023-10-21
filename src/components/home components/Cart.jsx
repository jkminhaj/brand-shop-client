import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const cartData = useLoaderData()
    console.log(cartData)
    const {name , price , brand_name,type,short_description,img} = cartData
    return (
        <div className="border shadow-sm rounded mt-7 p-4 md:p-10 md:mt-12">
            <h1 className="text-3xl mb-5 text-center font-medium">Cart ( {cartData.length} items ) </h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cartData.map(item=> <tr key={item.name}>
                                
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                                <div className="text-sm opacity-50">{item.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.short_description}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Remove</button>
                                    </th>
                                </tr>)
                            }
                           
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;