/* const OeEnquiryList = () => {
    return(
        <div className="main">
            <h1>Enquiry</h1>                
        </div>
    );
}
export default OeEnquiryList; */

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllEnquiry } from '../../Service/Service';

const OeEnquiryList = () => {

    const [enquiryData, setEnquiryData] = useState(null);

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

    const cibilHandler = (enquiryId) => {
        navigate('/oe/oeenquirylist/cibilscore/' + enquiryId);
    }    

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
                                    <td>email</td>
                                    <td>Gender</td>
                                    <td>Phone Number</td>
                                    <td>Pan Number</td>
                                    <td>Adhar Number</td>
                                    <td>Address</td>
                                    <td>Cibil</td>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiryData && enquiryData.map(enquiry => (
                                    <tr key={enquiry.enquiryId}>
                                        <td>{enquiry.enquiryId}</td>
                                        <td>{enquiry.fullName}</td>
                                        <td>{enquiry.birthDate}</td>
                                        <td>{enquiry.email}</td>
                                        <td>{enquiry.gender}</td>
                                        <td>{enquiry.phoneNumber}</td>
                                        <td>{enquiry.panNumber}</td>
                                        <td>{enquiry.adharNumber}</td>
                                        <td>{enquiry.address}</td>
                                        <td>
                                        <a onClick={() => { cibilHandler(enquiry.enquiryId) }} className="btn btn-info">Cibil</a>
                                            {/* <button type='button' onClick={() => { cibilHandler(enquiry.enquiryId) }} className='btn btn-primary'>Cibil</button> */}
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

export default OeEnquiryList;