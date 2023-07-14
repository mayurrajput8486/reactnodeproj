import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OeLogout = () => {
    const navigate = useNavigate();
    useEffect(() => {
            navigate("/Login");
    },[]);    

}
export default OeLogout;