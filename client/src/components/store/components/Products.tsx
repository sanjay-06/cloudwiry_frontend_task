export default function Products(props: { products:any ,addToCart:any,addToWhishlist:any})
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
                                    <button onClick={() => props.addToWhishlist(product)} className="button">
                                        Add To wishlist
                                    </button>{" "}
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
