import {Link,NavLink,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';

const EnquiryList = () => {

    const[enquiryData,setEnquiryData] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:3001/api/getAllEnquiry").then((res)=>{
            return res.json();
        }).then((response)=>{
            setEnquiryData(response.response)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const deleteEnquiry=(id)=>{
        if(window.confirm("Are you sure?")){
            fetch("http://localhost:3001/api/deleteEnquiry/"+id,{
                method:"DELETE"
                
                
        }).then((res)=>{
            alert("Enquiry deleted successfully")
            window.location.reload();
        }).catch((error)=>{
            console.log(error.message)
        })
    }}

    const editEnquiry=(id)=>{
        navigate('/enquiry/edit/' + id);
    }

    return (
        <div className="main">
       <div className="container">
           <div className="card">
               {/* <div className="card-title"> */}
               
               <div className="card-body">
                   
               <table className="table table-bordered">
                   <thead className="bg-dark text-white">
                       <tr>
                       <td>enquiryId</td>
                           <td>fullName</td>
                           <td>birthDate</td>
                           <td>email</td>
                           <td>gender</td>
                           <td>phoneNumber</td>
                           <td>panNumber</td>
                           <td>adharNumber</td>
                           <td>address</td>
                           <td>REGISTRATION</td>
                           <td>DOCUMENT UPLOAD</td>
                           <td>ACTION</td>
                           
                       </tr>
                   </thead>
                   <tbody>
                      {enquiryData&&enquiryData.map(item=>(
                            <tr>
                                <td>{item.enquiryId}</td>
                                <td>{item.fullName}</td>
                                <td>{item.birthDate}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.panNumber}</td>
                                <td>{item.adharNumber}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button type='button' className='btn btn-success'>Registration</button>
                                    
                                </td>
                                <td>
                                    <button type='button' className='btn btn-success'>Document Upload</button>
                                </td>
                                <td>
                                    <a onClick={()=>{editEnquiry(item.id)}} className="btn btn-success">Edit</a>
                                    <a onClick={()=>{deleteEnquiry(item.id)}} className="btn btn-success">Delete</a>
                                </td>
                            
                            </tr>))
                      }
                           
                    </tbody>
               </table>
               </div>
           </div>
       </div>
       </div>
   );
}
export default EnquiryList;