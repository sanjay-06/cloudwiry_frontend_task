import './index.css'
import data from './data.json'
import Product from './components/Products';
import { useState } from 'react';
import Filter  from './components/filter';
import Cart from './components/cart'
import Products from './components/Products';

interface produce 
{
    _id:string,
    image: string,
    title: string,
    description: string,
    availableSizes: string[],
    price: number
}
interface finalproduce
{
    cart:produce,
    count:number
}
export default function App()
{
    const [list]=useState({products:data.products})
    const [size,setsize]=useState({size:""})
    const [sort,setsort]=useState({sort:""})
    const [shopcart,addshopcart]=useState<finalproduce[]>([])
    const sortProducts=(event:any)=>{
        console.log(event.target.value)

    }
    const filterProducts=(event:any)=>{

        console.log(event.target.value)

    }
    const removeFromCart=(product:any) =>{
        const cartItems=shopcart.slice()
        addshopcart(cartItems.filter((x:any)=>x._id!==product._id))
    }
    const createOrder=(order:any)=>{
        alert("Your order recieved"+ order)
    }
    const addToCart=(product:any)=>{
        let cartItems=shopcart.slice()
        console.log("first line "+cartItems)
        let alreadyIncart=false
        cartItems.forEach((item:any) =>{
            if(item._id === product._id)
            {
                item.count++
                alreadyIncart=true
            }
        })
        console.log(alreadyIncart)
        if(!alreadyIncart)
        {
            console.log("in")
            cartItems.push({...product,count:1})
            console.log(cartItems)
        }
        addshopcart(cartItems)
    }
      return(
          <div className="grid-container">
            <header>
                <a href="/">React shopping Cart</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                       <Product products={list.products} addToCart={addToCart}/>
                    </div>
                    <div className="sidebar">
                        <Cart cartItems={shopcart} removeFromCart={removeFromCart} createOrder={createOrder}/>
                    </div>
                </div>
            </main>
            <footer>
                simple design
            </footer>
          </div>
      )
}
