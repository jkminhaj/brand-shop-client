const Banner = () => {
    return (
        <div className="flex justify-center  flex-col-reverse md:flex-row ">
            <div>
                <p className="text-4xl font-bold mb-6 md:mt-16">Upgrade Your Life <br />with the iPhone 13</p>
                <p>Meet the future of smartphones. With the iPhone 13,<br /> you're in for a treat with its top-tier <br />features and extraordinary capabilities.</p>
                <button className="btn text-base bg-slate-50 mt-6">Buy Now</button>
            </div>
            <div>
                <img src="https://shop.jtglobal.com/wp-content/uploads/2023/09/iPhone15-hero-mobile.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;