const MiniBanner = () => {
    return (
        <div className="flex justify-between mt-5 border-y flex-col-reverse gap-1 md:flex-row">
            <div >
                <h2 className=" mt-3 mb-3 font-bold text-3xl">Find your peace with <br />Skull Candy</h2>
                <p>Express yourself with iconic headphone <br /> from the best brands
                </p>
                <button className="mt-7 border border-blue-600 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white">Shop Now</button>
            </div>
            <div>
                <img className="rounded rounded-l-none" src="https://m.media-amazon.com/images/S/aplus-media/sc/8f449003-c678-45d5-a765-db1a492c6a85.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="" />
            </div>
        </div>
    );
};

export default MiniBanner;