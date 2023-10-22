import { Link } from "react-router-dom";
import Slider from "./Slider";

const ProductCard = ({ item }) => {
    const { brand_name, details, _id, img, name, price, rating_value, type, short_description, is_available } = item;
    return (
        <div>

            <div className="card bg-base-100 border gap-4 ">
                <figure className="px-5 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl h-52 w-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="flex items-center gap-2 flex-wrap align-middle justify-center">
                        <h2 className="card-title">{name}</h2>
                        <div className="flex items-center rating rating-xs badge gap-1">
                            <p>{rating_value}</p>
                            <input type="radio" className="mask mask-star" />
                        </div>
                    </div>
                    <p>{brand_name}</p>
                    <div className="flex items-center gap-2">
                        <p >{type}</p>
                        <p className="text-sm"><span className="text-base">$ </span>{price}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/productcarddetails/${_id}`}><button className="px-3  py-1 hover:bg-slate-50 rounded-lg border">Details</button></Link>
                        <Link to={`/updateproduct/${_id}`}><button className="px-3  py-1 hover:bg-slate-50 rounded-lg border">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;