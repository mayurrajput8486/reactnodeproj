import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AhLogout = () => {
    const navigate = useNavigate();
    useEffect(() => {
            navigate("/Login");
    },[]);    

}
export default AhLogout;