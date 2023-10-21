import { Link } from "react-router-dom";

const Brand = ({brand}) => {
    const {name , img} = brand;
    return (
        <Link to={`/brand/${name}`}>
        <div>
            <div className="card cursor-pointer bg-base-100 shadow-sm image-full">
                <figure><img className="h-1" src={img}/></figure>
                <div className="card-body">
                    <h2 className="text-center text-3xl text-white">{name}</h2>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Brand;