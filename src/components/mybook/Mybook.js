import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Mybook = () => {
  const {user} = useAuth();
  const name = user?.displayName;
  const [myorder , setMyorder] = useState([]);
  console.log(myorder)
  console.log(name);
   useEffect(()=>{
     axios.get(`http://localhost:5000/myorder/${name}`)
     .then(result =>{
      setMyorder(result.data);
     })
   } , [user])

   const handlePendding = () =>{
     console.log()
   }
   
  return (
    <div className='container'>  
      <h1 className='text-center'> my order</h1>     
    <div className='row'>
      {
       myorder?.map(order => {
         return(
          <div className='col-lg-6'>
           <div className='m-3 p-4 border'>   
            <img className='w-100' src={order.img} alt="" />
            <h3> {order.name} </h3>
              <h4 className='text-etalic'> <span className='text-primary'> 3 days</span> $ {order.price}</h4>
              <h4 className='text-etalic'> <span className='text-primary'> 7 days</span> $ {order.price*2-100}</h4>
              <h4 className='text-etalic'> <span className='text-primary'> 1 month</span> $ {order.price*3-200}</h4>
              <p>{order.description?.slice(0.130)}</p> 
             <button onClick={()=>handlePendding} className='btn btn-primary fs-5 px-4'> Pending </button>
          </div>
       </div>
         )
       })
      }
    </div>
    </div>
  );
};

export default Mybook;