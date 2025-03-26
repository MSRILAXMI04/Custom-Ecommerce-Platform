import { useState } from 'react'
import './App.css'

function Productpage() {
  const [count, setCount] = useState(0)
  return (
    <>
       <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https:i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https:i.pinimg.com/originals/6f/39/35/6f393516f4f2876c5ff1b8ddcf57c638.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://www.ratanjaipur.com/cdn/shop/articles/Men_and_Women_Ethanic_outfit_1.jpg?v=1726216587&width=3125" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <br />

    <div className="container-fluid">
        <div className="row bg-body-secondary">
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/37/e9/2d/37e92d6030215629f1d30d092c3adef5.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Pastel Mint Mirror Work Anarkali Suit with Dupatta</h5>
                  <p className="card-text">3813 Reviews on 
                    MRP₹5,100.00 ₹2,800.0025% Off
                    Inclusive of all taxes
                     
                    Offers:3
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/09/fc/b8/09fcb875f0890d440777083ed05beee0.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Graceful Emerald Green Embroidered Palazzo Suit</h5>
                  <p className="card-text">3113 Reviews on 
                    MRP₹3,475.00 ₹2,300.0025% Off
                    Inclusive of all taxes
                     
                    Offers:6
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger" >Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/3b/47/f2/3b47f2a9c9ecd12f71e248504099c420.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Elegant Wine Red Halter Neck Palazzo Set, A-line</h5>
                  <p className="card-text">2813 Reviews on 
                    MRP₹4,775.00 ₹2,700.0025% Off
                    Inclusive of all taxes
                     
                    Offers:2
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/5d/3c/21/5d3c21e8814a52c8f5996d83ace84d53.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Elegant Tailored Navy Blue Jodhpuri Suit with Classic Detailing</h5>
                  <p className="card-text">1813 Reviews on 
                    MRP₹4,500.00 ₹3,000.0025% Off
                    Inclusive of all taxes
                     
                    Offers:3
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container-fluid">
        <div className="row bg-body-secondary">
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/46/2c/d6/462cd65f393ebb9512d63fe7d11a9982.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Stylish Yellow Cotton Kurthi and Plazzo set.</h5>
                  <p className="card-text">2713 Reviews on 
                    MRP₹1,000.00 ₹500.0025% Off

                    Inclusive of all taxes
                     
                    Offers:5
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/f1/00/73/f100738ce0a459e90f8a42a705109524.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Black Embroidered Kurtha with Sheer Dupatta</h5>
                  <p className="card-text">813 Reviews on 
                    MRP₹4,475.00 ₹1,800.0020% Off
                    Inclusive of all taxes
                     
                    Offers:3
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger" >Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/25/ba/b7/25bab7168b520ac6d40680e7babbe2a1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Majestic Ivory Gold Traditional Sherwani</h5>
                  <p className="card-text">413 Reviews on 
                    MRP₹2,775.00 ₹1,700.0025% Off
                    Inclusive of all taxes
                     
                    Offers:6
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/66/41/e2/6641e28fb070b05262b47a87c578b3d7.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Embroidered Velvet Sherwani in Black</h5>
                  <p className="card-text">3813 Reviews on 
                    MRP₹7,500.00 ₹10,000.0025% Off
                    Inclusive of all taxes
                     
                    Offers:3
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container-fluid">
        <div className="row bg-body-secondary">
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/24/01/69/2401697d44f60192001ef82cdbd59ca8.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Regal Wine Textured Indo-Western Sherwani Set</h5>
                  <p className="card-text">1213 Reviews on 
                    MRP₹5,100.00 ₹3,800.0025% Off
                    Inclusive of all taxes
                     
                    Offers:4
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/82/69/d6/8269d6715578d65a97be6479a0391d73.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Ivory Pink Embroidered Tunic & Palazzo Set</h5>
                  <p className="card-text">3813 Reviews on 
                    MRP₹3,420.00 ₹2,300.0025% Off
                    Inclusive of all taxes
                     
                    Offers:5
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger" >Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/4f/8e/bf/4f8ebf5770a7481f4958ad0001bef07d.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Ivory Embroidered Kurta with Nehru Jacket</h5>
                  <p className="card-text">3813 Reviews on 
                    MRP₹5,775.00 ₹2,100.0025% Off
                    Inclusive of all taxes
                     
                    Offers:3
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/bb/bd/52/bbbd529c4cbef865ba83d020cc1e0ffe.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Golden Lace Peplum Sharara Set with Intricate Embroidery</h5>
                  <p className="card-text">2813 Reviews on 
                    MRP₹7,500.00 ₹5,000.0025% Off
                    Inclusive of all taxes
                     
                    Offers:2
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container-fluid">
        <div className="row bg-body-secondary">
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/80/7c/da/807cda9dad0fa5972bc81d2ec5047847.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Ivory Embroidered Sherwani Classic Detailing</h5>
                  <p className="card-text">3813 Reviews on 
                    MRP₹5,100.00 ₹3,800.0025% Off
                    Inclusive of all taxes
                     
                    Offers:4
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/ec/b3/65/ecb3656db8adf5fec0bcc5a94b3cf50e.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Sage Green Embroidered Blazer with Crochet Shirt</h5>
                  <p className="card-text">2415 Reviews on 
                    MRP₹4,475.00 ₹2,300.0025% Off
                    Inclusive of all taxes
                     
                    Offers:2
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger" >Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/f1/90/6d/f1906d4a2509782e824759881352f8d0.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Blush Pink Embroidered Dhoti Set with Cape</h5>
                  <p className="card-text">5413 Reviews on 
                    MRP₹3,800.00 ₹2,700.0025% Off
                    Inclusive of all taxes
                     
                    Offers:3
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/48/d5/4a/48d54a4798cf64b362865fd58a64952f.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Wine Red Anarkali Gown with Brocade Dupatta</h5>
                  <p className="card-text">4572 Reviews on 
                    MRP₹7,500.00 ₹3,000.0025% Off
                    Inclusive of all taxes
                     
                    Offers:2
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-6">
            <div className="card">
                <iframe width="728" height="420" src="https://www.youtube.com/embed/tx80zK9QKDU?si=_28QvU7oeAFnWKU_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h5 className="card-title"></h5>
            </div>
          </div> 
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/d2/d6/75/d2d675b5da4c1af5fc7ba6b99a14d86b.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Black & Gold Embroidered Palazzo Set</h5>
                  <p className="card-text">1413 Reviews on 
                    MRP₹5,800.00 ₹2,300.0025% Off
                    Inclusive of all taxes
                     
                    Offers:2
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
          <div className="col-3">
            <div className="card">
                <img src="https://i.pinimg.com/474x/4e/fa/62/4efa620206b8ed0d72d117397df2eee8.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Pastel Embroidered Crop Top & Pleated Skirt Set</h5>
                  <p className="card-text">2572 Reviews on 
                    MRP₹7,200.00 ₹3,000.0025% Off
                    Inclusive of all taxes
                     
                    Offers:1
                    Shipping:Free</p>
                  <a href="#" className="btn btn-danger">Add to Shopping Bag</a>
                </div>
              </div>
          </div>
       </div>
     </div>
      <br />
      <h6><br></br></h6>
        <h2 style={{ textAlign: "center", color: "palevioletred" }}>Get a free gift on your first order</h2>      
          <div style={{  textAlign:"center" }}>
          <a href="#">
            <img 
              src="https://www.shutterstock.com/image-vector/ukraine-kropyvnytskyi-april-26-2023-260nw-2293917457.jpg" 
              height="100px" 
              width="300px" 
              alt="Download App Banner" />
          </a>
          <h6 style={{ color:"black"}}>Download App Now</h6>
        </div>

       <br />

       <div className="container-fluid text-center">
        <table style={{ backgroundColor: "silver", height: "200px", width: "1500px" }}>
          <tbody>
            <tr>
              <th style={{ color: "black" }}>ABOUT</th>
              <th style={{ color: "black" }}>HELP</th>
              <th style={{ color: "black" }}>FOLLOW US</th>
              <th style={{ color: "black" }}>CONTACT US</th>
            </tr>
            <tr>
              <td style={{ color: "black" }}>
                Contact Us<br />
                About Us <br />
                Careers<br />
                Terms & Conditions<br />
                Join our team<br />
                We respect your Privacy
              </td>
              <td style={{ color: "black" }}>
                Track your order<br />
                FAQ<br />
                Returns<br />
                Cancellations<br />
                Payments<br />
                Customer Care<br />
                Coupons
              </td>
              <td style={{ color: "black" }}>
                Facebook<br />
                Instagram<br />
                Twitter<br />
                Pinterest
              </td>
              <td style={{ color: "black" }}>
                WhatsApp: 765432897<br />
                Call us: 1800-790-1200<br />
                Email: Ajiostore@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </>
  );
}

export default Productpage;

