import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CmLogout = () => {
    const navigate = useNavigate();
    useEffect(() => {
            navigate("/Login");
    },[]);    

}
export default CmLogout;