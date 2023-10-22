const Slider = () => {
    return (
        <div>
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://lh4.googleusercontent.com/U-3U-n1QYks668UzsHVbhsQQmuCUdc5GNgObHbjt6tQbwcREZNg54d8mLugsxEYV9uwmlI73UFUdtXQYyL-hCgbxmIjniDxt3puUQy54fnXH4V1PvRtgScnTrGwq60tqE-EGWLPEXr2xJQbniHgzAb8" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://cache.tradeinn.com/images/brand-page/banner_4322.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.dghelp.com/wp-content/uploads/2019/08/Surface_Pro_Banner_DG_Help_2000x600.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.bechtle.com/dam/jcr:285159dd-4044-4ce8-8af4-9da26531e5d7/cw02_mainbanner_microsoft-surface-pro7plus-de.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

            <div className="carousel w-full rounded">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://www.dghelp.com/wp-content/uploads/2019/08/Surface_Pro_Banner_DG_Help_2000x600.png" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://www.bechtle.com/dam/jcr:285159dd-4044-4ce8-8af4-9da26531e5d7/cw02_mainbanner_microsoft-surface-pro7plus-de.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://www.pcstore.ae/wp-content/uploads/2023/03/Macebook-Laptop-Banner-1.png" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Slider;