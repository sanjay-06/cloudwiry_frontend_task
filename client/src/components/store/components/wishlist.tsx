import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function wishlist(props:{cartItems:any,removeFromwish:any,addTocart:any}) {
    return (
        <div className="cart">
            {props.cartItems.length===0?
            (
            <div className="cart">Your Wishlist is empty</div>
            ):(
                <ul className="cart-items">
                {props.cartItems.map((item:any) => (
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
                          onClick={() => props.removeFromwish(item)}
                        >
                          Remove
                        </button>
                        <button
                          className="button primary"
                          onClick={() => props.addTocart(item)}
                        >
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  </li>
                  </Fade>
                ))}
              </ul>
            )}
        </div>
    )
}
