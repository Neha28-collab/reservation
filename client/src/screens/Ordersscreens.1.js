import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';


export default function Ordersscreens() {

  const dispatch = useDispatch();
  // const orderstate = useSelector((state)=>state.getUserOrdersReducer);
  // const { orders, error, loading } = orderstate ;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      <div className='row justify-content-center'>
        {/* {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}
            {orders && orders.map(order=>{
              return <div className='col-md-8'>
                <div className='flex-container'>
                  <div>
                  {order.orderItems.map(item=>{
                    return <div>
                    <h2>Items</h2>
                      <h1>{item.name}[{item.varient}]*{item.quantity}= {item.price}</h1>
                    </div>
                  })}
                  </div>
                </div>
                <div>
                <h2>Info</h2>
                <h1>{order.orderAmount}</h1>
                <h1>{order.createdAt.substring(0,10)}</h1>
                </div>
  
              </div>
            })} */}
      </div>
    </div>
  );
}
