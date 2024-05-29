export let Carousal = () => {
    return (
        <div id="mycarousel" className="carousel slide" >

            <div className="carousel-inner">

                <div class="item active">
                    <img class="d-block w-100" src="pakistan-priceoye-slider-unq16.jpg" alt="First slide" />
                </div>
                <div class="item">
                    <img class="d-block w-100" src="2ndSlide.jpg" alt="Second slide" />
                </div>
                <div class="item">
                    <img class="d-block w-100" src="3rdSlide.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" ></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}