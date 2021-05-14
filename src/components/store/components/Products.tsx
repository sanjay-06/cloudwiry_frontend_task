import logo from './images/dress1.jpg'
import { useState } from 'react'

export default function Products(props: { products:any ,addToCart:any})
{
        return (
            <div>
                <ul className="products">
                    {props.products.map((product:any)=>(
                        <li key={product._id}>
                            {/* {console.log(require('./images/'+product.image))} */}
                            <div className="product">
                                <a href="#">
                                    <img src={product.image}></img>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {"\u20A8 "+product.price}
                                    </div>
                                    <button onClick={() => props.addToCart(product)} className="button primary">
                                        Add To cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )}
