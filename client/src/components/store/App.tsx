import './index.css'
import Product from './components/Products';
import { useEffect, useState } from 'react';
import Filter  from './components/filter';
import Cart from './components/cart'
import Button from 'react-bootstrap/Button'
import Modal from '../seller/pages/Modal'
import Wishlist from './components/wishlist'

interface produce 
{
    _id:string,
    title: string,
    image: string,
    price: number
}
interface finalproduce
{
    cart:produce,
    count:number
}
export default function App()
{
    const [cons,setcons]=useState<produce[]>([])
    let [list,setlist]=useState<produce[]>([])
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*", 'Accept': 'application/json' },
    };
    const getData=()=>{
        fetch('http://localhost:8000/getvalues',requestOptions)
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            setlist(myJson["product"])
          });
      }
      useEffect(()=>{
        getData()
      },[])

    const [sort,setsort]=useState({sort:""})
    const [shopcart,addshopcart]=useState<finalproduce[]>([])
    const [whishshopcart,addwishshopcart]=useState<finalproduce[]>([])
    const [modalShow, setModalShow] = useState(false);
    const filterProducts=(event:any)=>{

        console.log(event.target.value)
        if(event.target.value !== '')
        {
            setcons(list)
            setlist(list.filter(pro => pro.title == event.target.value))
        }
        if (event.target.value==='ALL')
        {
            window.location.reload()
        }
        
    }
    const removeFromCart=(product:any) =>{
        const cartItems=shopcart.slice()
        addshopcart(cartItems.filter((x:any)=>x._id!==product._id))
    }
    const removeFromwish=(product:any) =>{
        const cartItems=whishshopcart.slice()
        addwishshopcart(cartItems.filter((x:any)=>x._id!==product._id))
    }

    const createOrder=(order:any)=>{
        alert("Your order recieved"+ order)
    }
    const addToCart=(product:any)=>{
        let cartItems=shopcart.slice()
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
    const addToWhishlist=(product:any)=>{
        let cartItems=whishshopcart.slice()
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
        addwishshopcart(cartItems)
    }

      return(
          <div className="grid-container">
            <header>
                <a href="/">React shopping Cart</a>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically center
             </Button>
            </header>
            <main>

                <div className="content">
                    <div className="main">
                        <Filter
                        sort={sort}
                        filterProducts={filterProducts}
                        products={list}
                        />
                       <Product products={list} addToWhishlist={addToWhishlist} addToCart={addToCart}/>
                    </div>
                    <div className="sidebar">
                        <Cart cartItems={shopcart} removeFromCart={removeFromCart} createOrder={createOrder}/>
                    </div>
                    <Modal
                    show={modalShow}
                    value={<Wishlist removeFromwish={removeFromwish} addTocart={addToCart} cartItems={whishshopcart}/>}
                    title="Whishlist"
                    onHide={() => setModalShow(false)}
                    />
                </div>
            </main>
            <footer>
                simple design
            </footer>
          </div>
      )
}
