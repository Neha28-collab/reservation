import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../actions/cartActions';
import Pizza from '../components/Pizza';
import { deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';

export default function CartScreen() {

    const cartstate = useSelector((state) => state.cartReducer);
const cartItems= cartstate.cartItems

var subtotal= cartItems.reduce((x,item)=>x+item.price,0)
const dispatch= useDispatch()

  return (
    <div>
        <div className='row justify-content-center' style={{minHeight:'100vh'}}>
            <div className='col-md-6'>
              <h2 style={{fontSize:'40px'}}>My Cart</h2>

              {cartItems.map(item=>{
                return <div className='flex-container'>
                <div className='text-left m-1 w-100'>
                  <h1>{item.name} [{item.varient}]</h1>
                  <h1>Price: {item.quantity}* {item.prices[0][item.varient]}={item.price}</h1>
                  <h1 style={{display:'inline' }}>Quantity: <a className='plus' onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}>+</a> <b>{item.quantity}</b> <a className='minus' onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}>-</a></h1>
                <hr />
                </div>
                <div className='m-1 w-100'>
                  <img src={item.image} style={{height: '80px', width: '80px'}} />

                </div>
                <div className='m-1 w-100 mt-4'>
                  <a className='minus' onClick={()=>{dispatch(deleteFromCart(item))}}> Remove</a>

                </div>
              </div>
              })}

            </div>
            <div className='col-md-4 text-right'>
              <h3 style={{fontSize:'45px'}}>Sub Total: Rs. {subtotal}</h3>
              <Checkout subtotal={subtotal} />

            </div>
        </div>
    </div>
  )
}
