import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteEnquiryById, getAllEnquiry, getRegIdByEnquiryId } from '../../Service/Service';

const EnquiryList = () => {

    const [enquiryData, setEnquiryData] = useState(null);
    const [len, setLen] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
       /*  fetch("http://localhost:3001/api/getAllEnquiry").then((res) => {
            return res.json();
        }).then((response) => {
            setEnquiryData(response.response)
        }).catch(error => {
            console.log(error)
        }) */
        getAllEnquiry().then((response) => {
            console.log(response.data.response);
            setEnquiryData(response.data.response);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteEnquiry = (enquiryId) => {
        if (window.confirm("Are you sure?")) {
            /* fetch("http://localhost:3001/api/deleteEnquiry/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert("Enquiry deleted successfully")
                window.location.reload();
            }).catch((error) => {
                console.log(error.message)
            }) */

            deleteEnquiryById(enquiryId).then((response) => {
                alert('Enquiry Deleted Successfully!');                
                getAllEnquiry().then((response) => {
                    setEnquiryData(response.data.response);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err.message);
            });
        }
    }

    const editEnquiry = (enquiryId) => {
        navigate('/re/enquiry/edit/' + enquiryId);
    };

    const getRegId = (enquiryId) => {
        getRegIdByEnquiryId(enquiryId).then((response) => {
            //console.log('response = ',response.data.response.length);
            //const len = response.data.response.length;
            setLen(response.data.response.length);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="main">
            <div className="container">
                {/* <div className="card">
                    <div className="card-body"> */}
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>Enquiry Id</td>
                                    <td>Fullname</td>
                                    <td>Birthdate</td>
                                    <td>Email</td>
                                    <td>Gender</td>
                                    <td>Phone Number</td>
                                    <td>Pan Number</td>
                                    <td>Adhar Number</td>
                                    <td>Address</td>
                                    <td>Registration</td>
                                    <td>Upload Document</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiryData && enquiryData.map(enquiry => (
                                    <tr key={enquiry.enquiryId}>
                                        <td>{enquiry.enquiryId}</td>
                                        <td>{enquiry.fullName}</td>
                                        <td>{new Date(enquiry.birthDate).toLocaleString()}</td>
                                        <td>{enquiry.email}</td>
                                        <td>{enquiry.gender}</td>
                                        <td>{enquiry.phoneNumber}</td>
                                        <td>{enquiry.panNumber}</td>
                                        <td>{enquiry.adharNumber}</td>
                                        <td>{enquiry.address}</td>
                                        <td>
                                            {
                                                getRegId(enquiry.enquiryId) 
                                            }
                                            <NavLink to={`/re/registration/${enquiry.enquiryId}`}><button type='button' className='btn btn-primary'>Registration</button></NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={`/re/uploadDocuments/${enquiry.enquiryId}`}><button type='button' className='btn btn-secondary'>Upload Documents</button></NavLink>
                                        </td>
                                        <td>
                                            <a onClick={() => { editEnquiry(enquiry.enquiryId) }} className="btn btn-info">Edit</a>
                                            <a onClick={() => { deleteEnquiry(enquiry.enquiryId) }} className="btn btn-danger">Delete</a>
                                        </td>

                                    </tr>))
                                }

                            </tbody>
                        </table>
                    {/* </div>
                </div> */}
            </div>
        </div>
    );
}

export default EnquiryList;