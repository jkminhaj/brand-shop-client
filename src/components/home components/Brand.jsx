import { Link } from "react-router-dom";

const Brand = ({brand}) => {
    const {name , img} = brand;
    return (
        <Link to={`/brand/${name}`}>
        <div>
            <div className=" cursor-pointer rounded bg-base-100  image-full">
                <figure><img className="border rounded-lg" src={img}/></figure>
                <div className="">
                    <h2 className="badge relative bg-white bottom-10 left-5">{name}</h2>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Brand;