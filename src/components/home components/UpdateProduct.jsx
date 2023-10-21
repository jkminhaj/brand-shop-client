import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const oldProduct = useLoaderData()[0]
    const {name,_id, brand_name, img, type, price, short_description , rating_value} = oldProduct
    const [oldname, oldbrand_name, oldimg, oldtype, oldprice, oldshort_description , oldrating_value] =[name, brand_name, img, type, price, short_description , rating_value]
    console.log(oldProduct)
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const brand_name = form.brandName.value
        const img = form.img.value
        const type = form.type.value
        const price = form.price.value
        const short_description = form.description.value
        const rating_value = form.rating.value;
        const updatedProduct = {
            name, brand_name, img, type, price, short_description , rating_value
        }
        // adding updatedProduct to database
        fetch(`http://localhost:5000/productid/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
        }).then(res=>res.json()).then(data=>alert('item updated successfully'))
    }
    return (
        <div>
            <div className="flex flex-col items-center md:gap-32">
                <div className='flex justify-center mt-8 md:mt-16'>
                    <div>
                        <div className="bg-white px-9 py-5 rounded-md border shadow-sm space-y-5">
                            <h1 className="text-center text-2xl font-semibold mb-7">Update Product</h1>
                            <form onSubmit={handleUpdate}>
                                <input name="name" type="text" defaultValue={oldname} required className="w-full md:w-60 py-1 mb-5 outline-none border-b-2 " placeholder="Product Name" /><br />
                                {/* <input name="brandName" type="text" required className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="Brand Name" /><br /> */}
                                <input name="img" type="text" required defaultValue={oldimg} className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="Product Image" /><br />
                                <input name="price" type="number" defaultValue={oldprice} required className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="Product Price" /><br />
                                {/* <input name="" type="text" required className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="" /><br /> */}

                                {/* brand */}
                                <label className="mb-4">Brand Name : </label><br />
                                <select defaultValue={oldbrand_name} name="brandName" className="mb-4 w-full outline-none border-b-2 pb-1" placeholder="choose" id="cars">
                                    <option>None</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="Lenovo">Lenovo</option>
                                    <option value="LG">LG</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                    <option value="Huawei">Huawei</option>
                                    
                                </select><br></br>

                                {/* dropdown */}
                                <label className="mb-4">Choose product type : </label><br />
                                <select defaultValue={oldtype} name="type" className="mb-4 w-full" placeholder="choose" id="cars">
                                    <option >None</option>
                                    <option value="phone">Smart Phone</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="headphone">Head Phone</option>
                                    
                                </select><br></br>

                                {/* rating */}
                                <div className="rating rating-md my-2 w-full">
                                    <input type="radio" name="rating" value='1' className="mask mask-star-2" />
                                    <input type="radio" name="rating" value='2' className="mask mask-star-2" />
                                    <input type="radio" name="rating" value='3' className="mask mask-star-2" />
                                    <input type="radio" name="rating" value='4' className="mask mask-star-2" />
                                    <input type="radio" name="rating" value='5' className="mask mask-star-2" />
                                </div><br />

                                <textarea defaultValue={oldshort_description} className="w-full border pl-1 outline-none rounded mb-4" name="description" placeholder="Short description"></textarea>
                                <button className="w-full bg-black hover:bg-slate-700 font-semibold rounded-full px-4 py-2 shadow text-white" >Update</button>
                            </form>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateProduct;