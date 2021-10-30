import { useContext } from "react"
import { Mycontext } from "../Context/ContextProvider"

const useAuth = () =>{
  return useContext(Mycontext);
}

export default useAuth;