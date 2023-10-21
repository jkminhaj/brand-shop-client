import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
    const {brand_name, details , _id , img , name , price , rating_value,type , short_description,is_available} = item ;
    return (
        <div>
            <div className="card bg-base-100 border gap-4">
                <figure className="px-5 pt-5">
                    <img  src={img} alt="Shoes" className="rounded-xl w-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    
                    <div className="card-actions">
                        <button className="btn btn-primary">Update</button>
                        <Link to={`/productcarddetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;