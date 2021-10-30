import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const locationis = location?.state?.from?.pathname || '/home'
  
  const {googleSign , setLoading} = useAuth();
  const handleGoogle =()=>{
    setLoading(true)
     googleSign()
     .then((result) =>{
       history.push(locationis)
    }).catch((error)=>{
      console.log(error)
    }).finally(()=>{
       setLoading(false)
    })
  }

  return (
    <div>
      <h1> this is login </h1>
       <button onClick={handleGoogle}> log in with google </button>
    </div>
  );
};

export default Login;