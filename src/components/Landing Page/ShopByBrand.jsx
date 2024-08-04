
const ShopByBrand = () => {
  return (
    <div>
            <div>
          <div className="flex justify-center mt-32">
            <hr className="w-1/4 mt-3" />
            <span className="mx-2">SHOP BY BRAND</span>
            <hr className="w-1/4 mt-3" />
          </div>

          <div className="container">
            <div className="mt-8 flex justify-evenly">
                <div><img className="w-28" src="images/LandingPage/carousel1.png" alt="Carousel 1" /></div>
                {/* <div><img className="w-28" src="images/LandingPage/carousel2.png" alt="Carousel 2" /></div> */}
                <div><img className="w-28" src="images/LandingPage/carousel3.jpg" alt="Carousel 3" /></div>
                <div><img className="w-28" src="images/LandingPage/carousel4.jpg" alt="Carousel 4" /></div>
                <div><img className="w-32 mt-2" src="images/LandingPage/carousel5.jpg" alt="Carousel 5" /></div>
                <div><img className="w-28" src="images/LandingPage/carousel6.jpg" alt="Carousel 6" /></div>
                <div><img className="w-48" src="images/LandingPage/carousel7.jpg" alt="Carousel 7" /></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShopByBrand
