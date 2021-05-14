import React,{ useState } from 'react'
import logo from './images/dress1.jpg'
import Fade from 'react-awesome-reveal'

export default function Cart(props:any) {
    const cartItems=props.cartItems
    const [showCheckout,checkout]=useState(false)
    const [Name,setname]=useState("")
    const [Email,setemail]=useState("")
    const [Address,setaddress]=useState("")
    console.log(cartItems.length)
    const handleInput = (e:any) => {
        setname(e.target.value );
      };
      const createOrder = () => {
        const order = {
          name: Name,
          email: Email,
          address: Address,
          cartItems: cartItems,
          total: cartItems.reduce((a:any, c:any) => a + c.price * c.count, 0),
        };
        props.createOrder(order)
      };
    return (
       <div>
         <div>
            {cartItems.length===0?
            (
            <div className="cart cart-header">Cart is Empty</div>
            ):(
            <div className="cart cart-header">You have {cartItems.length} in your cart </div>
            )}
          </div>
        <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item:any) => (
                <Fade cascade={true}>
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {"\u20A8 "} {item.price} x {item.count}{"  "}
                      <button
                        className="button"
                        onClick={() => props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
                </Fade>
              ))}
            </ul>
            </div>
            {cartItems.length!==0 && (
                <div className="cart">
                <div className="total">
                    <div>
                        Total:{" \u20A8"+" "}
                        {cartItems.reduce((a:any,c:any)=>Math.round(a+c.price*c.count),0) }
                    </div>
                    <button
                    onClick={() => {
                      checkout(true)
                    }}
                    className="button primary"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            )}
             
              {showCheckout && (
               <Fade cascade={true}>
                  <div className="cart">
                    <form onSubmit={createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
            </div>
          )}