import authenticationInit from "../firebase/firebase.init";
import { getAuth,  signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
authenticationInit();

const useFirebase = () =>{
  // loading
  const [loading , setLoading] = useState(true)
  console.log(loading);
  // user State
  const [user , setUser ] = useState(null);
   // auth
     const auth = getAuth();

   // googleProvider 
     const googleProvider = new GoogleAuthProvider();

    // hangle google signIn
    const googleSign = () =>{
    return signInWithPopup(auth , googleProvider)
    }

    // logOUt
    const logOut = () =>{
      setLoading(true);
      signOut(auth)
      .then(()=>{
        setUser(null)
      }).finally(()=>{
        setLoading(false)
      })
    }
    
    // handle users 
    useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth , (user)=>{
        if(user){
          setUser(user)
        }
        setLoading(false)
      })
      
      return ()=> unsubscribe;
    },[])

 
return {googleSign , user , logOut , setLoading , loading}
} 
export default useFirebase;