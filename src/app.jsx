import './app.css'
import Header from './header.jsx';
import Footer from './footer.jsx';
import { useState, useEffect } from 'react';

export function App() {
  let brand = "infinix";

  let images = [

    {
      id: 1,
      image: "pakistan-priceoye-slider-unq16.jpg"

    }, {
      id: 2,
      image: "2ndSlide.jpg"

    }, {
      id: 3,
      image: "3rdSlide.jpg"

    }

  ];


  let localProducts = [
    {
      id: 1,
      image: "https://images.priceoye.pk/m10-tws-wireless-bluetooth-earbuds-pakistan-priceoye-genxn-270x270.webp",
      title: "M10 TWS Wireless Bluetooth Earbuds",
      price: "1049",
      discount: "2499",
      discountPercent: "58%off",

    },
    {
      id: 2,
      image: "https://images.priceoye.pk/itel-pakistan-priceoye-cubi7-270x270.webp",
      title: "itel wireless earbuds (kt-01)",
      price: "Rs 2,149",
      discount: "Rs 8,000",
      discountPercent: "73%off"

    },
    {
      id: 3,
      image: "https://images.priceoye.pk/dany-wireless-earbuds-airdots-110-pakistan-priceoye-lasmy-270x270.webp",
      title: "Dany Airdots 110 Wireless Earbuds",
      price: "Rs 3,149",
      discount: "Rs 4,000",
      discountPercent: "21%off"

    },

    {
      id: 4,
      image: "https://images.priceoye.pk/airox-x400-airpods-pro-3rd-gen-pakistan-priceoye-4s7th-270x270.webp",
      title: "Airox X400 Airpods Pro 3rd",
      price: "Rs 2,699",
      discount: "Rs 4,999",
      discountPercent: "46%off"
    },
    {
      id: 5,
      image: "https://images.priceoye.pk/anker-soundcore-life-q45-headphones-pakistan-priceoye-4pi5p-270x270.webp",
      title: "Anker Soundcore Life Q45 Headphones",
      price: "Rs 28,399",
      discount: "Rs 33,000",
      discountPercent: "14%off"
    },
    {
      id: 6,
      image: "https://images.priceoye.pk/hottu-tws-earbuds-hot-ts20-pakistan-priceoye-e7w83-270x270.webp",
      title: "Hottu TWS Earbuds HOT-TS20",
      price: "Rs 3,899",
      discount: "Rs 7,000",
      discountPercent: "44%off"
    },

    {
      id: 7,
      image: "https://images.priceoye.pk/soundpeats-opera05-wireless-earbuds-pakistan-priceoye-qwxlf-270x270.webp",
      title: "Soundpeats Opera 05 Wireless Earbuds",
      price: "Rs 18,299",
      discount: "Rs 20,00",
      discountPercent: "9%off"
    },
    {
      id: 8,
      image: "https://images.priceoye.pk/air-31-tws-transparent-earbuds-pakistan-priceoye-pcije-270x270.webp",
      title: "Air 31 TWS Transparent Earbuds",
      price: "Rs 1,299",
      discount: "Rs 4,000",
      discountPercent: "68%off"
    },
    {
      id: 9,
      image: "https://images.priceoye.pk/galaxy-buds-2-pakistan-priceoye-l3zzy-270x270.webp",
      title: "Samsung Galaxy Buds 2",
      price: "Rs 18,599",
      discount: "Rs 21,999",
      discountPercent: "15%off"
    },

    {
      id: 10,
      image: "https://images.priceoye.pk/anker-soundcore-life-q35-headphones-pakistan-priceoye-w6yul-270x270.webp",
      title: "Anker Soundcore Life Q35 Headphones",
      price: "Rs 23,049",
      discount: "Rs 30,000",
      discountPercent: "23%off"
    },
    {
      id: 11,
      image: "https://images.priceoye.pk/ronin-r-640-earbuds-pakistan-priceoye-xdesz-270x270.webp",
      title: "Ronin R-640 Wireless Earbuds",
      price: "Rs 4,599",
      discount: "Rs 9,299",
      discountPercent: "51%off"
    },
    {
      id: 12,
      image: "https://images.priceoye.pk/audionic-wireless-airbuds-425-pakistan-priceoye-x6grd-270x270.webp",
      title: "Audionic Wireless Airbuds 425",
      price: "Rs 3,899",
      discount: "Rs 7,999",
      discountPercent: "51%off"
    },
  ];

  const [product, setNextProduct] = useState([]);

  useEffect(() => {
    const FetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const products = await response.json();
      setNextProduct(products);
      console.log(products)
    }

    FetchProducts();
  }, []);



  return (
    <>

      <Header />
      {/* Other content of your app */}




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

      < div style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "bold", marginTop: "40px" }
      }> Men's clothing</div >


      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 g-sm-2 d-flex align-items: stretch " >
          {product.filter((data) => data.category === "men's clothing").map((data) => (
            <div className="col" key={data.id}>
              <div className="card">
                <img src={data.image} className="card-img-top" alt={data.image} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "16px" }}   > {data.title.length > 50
                    ? `${data.title.substring(0, 30)}...`
                    : data.title} </h5>
                  <p className='card-price'><sup>Rs </sup>{data.price}</p>
                  <p
                    className='card-price'> category: {data.category}
                  </p>                  
                  <div className="card-row">

                    <p className='card-discount' color='black' marginLeft='5px'> Rating:{data.rating.rate} ({data.rating.count})</p>
                    <p className='card-percent'>{data.discountPercent} </p>

                  </div>
                </div>
              </div>
            </div>
          )

          )}
        </div>
      </div>

      < div style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "bold", marginTop: "40px" }
      }> women's clothing</div >


      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 g-sm-2 " >
          {product.filter((data) => data.category === "women's clothing").map((data) => (
            <div className="col" key={data.id}>
              <div className="card">
                <img src={data.image} className="card-img-top" alt={data.image} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "16px" }}   > {data.title} </h5>
                  <p className='card-price'><sup>Rs </sup>{data.price}</p>
                  <p
                    className='card-price'> category: {data.category}
                  </p>                  <div className="card-row">

                    <p className='card-discount' color='black' marginLeft='5px'> Rating:{data.rating.rate} ({data.rating.count})</p>
                    <p className='card-percent'>{data.discountPercent} </p>

                  </div>
                </div>
              </div>
            </div>
          )

          )}
        </div>
      </div>

      < div style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "bold", marginTop: "40px" }
      }> Electronics</div >


      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 g-sm-2 " >
          {product.filter((data) => data.category === "electronics").map((data) => (
            <div className="col" key={data.id}>
              <div className="card">
                <img src={data.image} className="card-img-top" alt={data.image} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "16px" }}   > {data.title} </h5>
                  <p className='card-price'><sup>Rs </sup>{data.price}</p>
                  <p
                    className='card-price'> category: {data.category}
                  </p>                  <div className="card-row">

                    <p className='card-discount' color='black' marginLeft='5px'> Rating:{data.rating.rate} ({data.rating.count})</p>
                    <p className='card-percent'>{data.discountPercent} </p>

                  </div>
                </div>
              </div>
            </div>
          )

          )}
        </div>
      </div>

      < div style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "bold", marginTop: "40px" }
      }> women's clothing</div >


      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 g-sm-2 " >
          {product.filter((data) => data.category === "women's clothing").map((data) => (
            <div className="col" key={data.id}>
              <div className="card">
                <img src={data.image} className="card-img-top" alt={data.image} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "16px" }}   > {data.title} </h5>
                  <p className='card-price'><sup>Rs </sup>{data.price}</p>
                  <p
                    className='card-price'> category: {data.category}
                  </p>                  <div className="card-row">

                    <p className='card-discount' color='black' marginLeft='5px'> Rating:{data.rating.rate} ({data.rating.count})</p>
                    <p className='card-percent'>{data.discountPercent} </p>

                  </div>
                </div>
              </div>
            </div>
          )

          )}
        </div>
      </div>
      {/* <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 g-sm-2 " >
          {products.map((data) => (
            <div className="col" key={data.id}>
              <div className="card">
                <img src={data.image} className="card-img-top" alt={data.image} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "16px" }}   > {data.title} </h5>
                  <p className='card-price'><sup>Rs</sup>{data.price}</p>

                  <div className="card-row">

                    <p className='card-discount' color='black' marginLeft='5px'><sup>Rs</sup> {data.discount} </p>
                    <p className='card-percent'>{data.discountPercent} </p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <p style="font-size: 20px; line-height: 1.5; color: #333; margin-bottom: 20px; text-align: center; text-style: bold">Best Seller</p>
      <p style="font-size: 20px; line-height: 1.5; color: #333; margin-bottom: 20px; text-align: center; text-style: bold">Get the best prices in town</p>

      <div className="container" >
        <div className="row ">
          {/* First column (full width) */}
          <div className="col-md-5 col-lg-5 col-sm-5 mb-3 col-12 " >

            <div className="card">

              <h5 className="card-title" style={{ fontSize: "16px" }}   >samsung Galaxy A14  </h5>
              <img src="https://images.priceoye.pk/samsung-galaxy-a14-pakistan-priceoye-dl6gq-500x500.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <p className='card-price'><sup>Rs</sup> 42,999</p>
                <div className="card-row">
                  <p className='card-discount'><sup>Rs</sup> 56,999</p>
                  <p className='card-percent'>25%off</p>

                </div>

              </div>
            </div>


          </div>
          <div className="col-md-7 col-lg-7 col-sm-7 col-12">
            <div className="row ">
              {/* Second column (two cards) */}
              <div className="col-md-6 col-lg-6 col-sm-6 col-12 ">
                <div className="row "
                >
                  <div className="card mb-3 ">

                    <h5 className="card-title" style={{ fontSize: "16px" }}   >samsung Galaxy A14  </h5>
                    <img src="https://images.priceoye.pk/infinix-inbook-y1-plus-laptop-core-i3-8gb-256gb-ssd-pakistan-priceoye-tjudb-270x270.webp" className="card-img-top" alt="" width={50} height={150} />
                    <div className="card-body">
                      <p className='card-price'><sup>Rs</sup> 42,999</p>
                      <div className="card-row">
                        <p className='card-discount'><sup>Rs</sup> 56,999</p>
                        <p className='card-percent'>25%off</p>

                      </div>

                    </div>
                  </div>

                  <div className="card ">
                    <img src="https://images.priceoye.pk/infinix-xe22-wireless-earbuds-pakistan-priceoye-apxgq-270x270.webp" className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: "16px" }}>Samsung Galaxy A14</h5>
                      <p className='card-price'><sup>Rs</sup> 42,999</p>
                      <div className="card-row">
                        <p className='card-discount'><sup>Rs</sup> 56,999</p>
                        <p className='card-percent'>25%off</p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Third column (two cards) */}
              <div className=" col-md-6 col-lg-6 col-sm-6 col-12 mt-3">
                <div className="row">
                  <div className="card ms-3 mb-3" >
                    <img src="https://images.priceoye.pk/audionic-airbud-550-pakistan-priceoye-o6fve-270x270.webp" className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: "16px" }}>Samsung Galaxy A14</h5>
                      <p className='card-price'><sup>Rs</sup> 42,999</p>
                      <div className="card-row">
                        <p className='card-discount'><sup>Rs</sup> 56,999</p>
                        <p className='card-percent'>25%off</p>
                      </div>

                    </div>
                  </div>
                  <div className="card ms-3">
                    <img src="https://images.priceoye.pk/t9-vintage-professional-trimmer-pakistan-priceoye-hiabd-270x270.webp" className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: "16px" }}>Samsung Galaxy A14</h5>
                      <p className='card-price'><sup>Rs</sup> 42,999</p>
                      <div className="card-row">
                        <p className='card-discount'><sup>Rs</sup> 56,999</p>
                        <p className='card-percent'>25%off</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      <h3> Filterd by brand name: "Samsung"   </h3>
      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 g-sm-2">
          {mobiles
            .filter((m) => m.brand === 'samsung') // Filter mobiles by brand
            .map((data) => (
              <div className="col" key={data.id}>
                <div className="card">
                  <img src={data.image} className="card-img-top" alt={data.image} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "16px" }}>{data.title}</h5>
                    <p className='card-price'><sup>Rs</sup>{data.price}</p>

                    <div className="card-row">

                      <p className='card-discount' color='black' marginLeft='5px'><sup>Rs</sup> {data.discount}</p>
                      <p className='card-percent'>{data.discountPercent}</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <h3> Filterd by brand name: "Infinix"   </h3>
      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 g-sm-2">
          {mobiles
            .filter((m) => m.brand === 'infinix') // Filter mobiles by brand
            .map((data) => (
              <div className="col" key={data.id}>
                <div className="card">
                  <img src={data.image} className="card-img-top" alt={data.image} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "16px" }}>{data.title}</h5>
                    <p className='card-price'><sup>Rs</sup>{data.price}</p>

                    <div className="card-row">

                      <p className='card-discount' color='black' marginLeft='5px'><sup>Rs</sup> {data.discount}</p>
                      <p className='card-percent'>{data.discountPercent}</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <h3> Filterd by brand name: "Vivo"   </h3>
      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 g-sm-2">
          {mobiles
            .filter((m) => m.brand === 'vivo') // Filter mobiles by brand
            .map((data) => (
              <div className="col" key={data.id}>
                <div className="card">
                  <img src={data.image} className="card-img-top" alt={data.image} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "16px" }}>{data.title}</h5>
                    <p className='card-price'><sup>Rs</sup>{data.price}</p>

                    <div className="card-row">

                      <p className='card-discount' color='black' marginLeft='5px'><sup>Rs</sup> {data.discount}</p>
                      <p className='card-percent'>{data.discountPercent}</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <h3> Filterd by brand name: "Random"   </h3>
      <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 g-sm-2">
          {mobiles.filter((m) => m.brand === 'hj') // Filter mobiles by brand
            .map((data) => (
              <div className="col" key={data.id}>

                <div className="card">
                  <img src={data.image} className="card-img-top" alt={data.image} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "16px" }}>{data.title}</h5>
                    <p className='card-price'><sup>Rs</sup>{data.price}</p>

                    <div className="card-row">

                      <p className='card-discount' color='black' marginLeft='5px'><sup>Rs</sup> {data.discount}</p>
                      <p className='card-percent'>{data.discountPercent}</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {mobiles.filter((mobile) => mobile.brand === 'Random').length === 0 && (
          <p>No products found for the brand "Random"</p>
        )}
      </div>

      <Footer></Footer>

    </>
  )


}

let samsungUrl = "https://th.bing.com/th/id/OIP.lvKNx8hIX-ub-CZVBww9nAHaEj?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
let infinixUrl = "data:image/png;base64,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"
let vivoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTVCe_ye0cjihHd2s6AHvB99unC-Ai2RvsA&usqp=CAU"

let mobiles = [

  {
    id: 1,
    image: samsungUrl,
    brand: "samsung",
    title: "Not 10",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"

  },
  {
    id: 2,
    image: samsungUrl,
    brand: "samsung",
    title: "s20 Ultra",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 3,
    image: samsungUrl,
    brand: "samsung",
    title: "Galaxy A14",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 4,
    image: samsungUrl,
    brand: "samsung",
    title: "Fold Galaxy",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 5,
    image: samsungUrl,
    brand: "samsung",
    title: "Samsung A70",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },

  {
    id: 6,
    image: infinixUrl,
    brand: "infinix",
    title: "Hot 10 play",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 7,
    image: infinixUrl,
    brand: "infinix",
    title: "Hot 10",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 8,
    image: infinixUrl,
    brand: "infinix",
    title: "Galaxy A14",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 9,
    image: infinixUrl,
    brand: "infinix",
    title: "Hot 9",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },

  {
    id: 10,
    image: infinixUrl,
    brand: "infinix",
    title: "Hot 9 pro",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 11,
    image: vivoUrl,
    brand: "vivo",
    title: "v10",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 12,
    image: vivoUrl,
    brand: "vivo",
    title: "v20",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 13,
    image: vivoUrl,
    brand: "vivo",
    title: "e23",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },

  {
    id: 14,
    image: vivoUrl,
    brand: "vivo",
    title: "vivo m10",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },
  {
    id: 15,
    image: vivoUrl,
    brand: "vivo",
    title: "v22e",
    price: "1000",
    discount: "200",
    discountPercent: "50%off"
  },

]
