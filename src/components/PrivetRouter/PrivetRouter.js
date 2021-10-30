import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivetRouter = ({children , ...rest}) => {

  const {loading, user} = useAuth();
  console.log(loading)
  
  if(loading){
    return(
     <div className='text-center'>
        <div className="spinner-border text-primary" role="status">
       <span className="sr-only fs-1"> </span>
      </div> 
     </div>
    );
    
  }
  return (
    <Route 
     {...rest}
     render={({location})=> user? (children):(
       <Redirect
        to={{
          pathname:'/login',
          state:{from: location}
        }}
       />
     )}
    />
    

  );
      
};

export default PrivetRouter;

