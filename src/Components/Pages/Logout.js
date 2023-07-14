import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
            navigate("/login");
    },[]);    

}
export default Logout;


/* import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

 const Logout =()=>{
const navigate =useNavigate();
   useEffect (()=>{
        navigate("/user/login")
   },[])
}
export default Logout */