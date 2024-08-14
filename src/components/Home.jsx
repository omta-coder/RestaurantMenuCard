import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "./CardData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

const Home = () => {
  const [cartdata, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  //add to cart
  const send = (e) =>{
   dispatch(addToCart(e));
   toast.success("Iteam added successfully")
  }
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Bhopal Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartdata.map((elem, index) => {
            return (
              <Card
                style={{ width: "22rem", border: "none" }}
                className="hove mb-4"
              >
                <Card.Img variant="top" className='cd' src={elem.imgdata} />

                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-2">{elem.dish}</h4>
                    <span>{elem.rating}&nbsp;★</span>
                  </div>

                  <div className="lower_data d-flex justify-content-between ">
                    <h5>{elem.address}</h5>
                    <span>₹{elem.price}</span>
                  </div>

                  <div className="extra"></div>

                  <div className="last_data d-flex justify-content-between align-items-center">
                    {/* <img src={elem.arrimg} className="limg" alt="" /> */}
                    <Button
                      style={{
                        width: "150px",
                        background: "#ff3054db",
                        border: "none",
                      }}
                      variant="outline-light"
                      className="mt-2 mb-2"
                      onClick={()=>send(elem)}
                    >
                      Add TO Cart
                    </Button>
                    {/* <img src={elem.delimg} className="laimg" alt="" /> */}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
