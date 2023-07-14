import { useState, useEffect } from 'react';
import { getAllRegistrationData } from '../../Service/Service';
import { NavLink } from 'react-router-dom';

const CmRegistrationList = () => {

    const [registrationData, setRegistrationData] = useState(null);

    useEffect(() => {
        getAllRegistrationData().then((response) => {
            console.log(response.data.response);
            setRegistrationData(response.data.response);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="main">
            <div className="container">
                <div className="card" >
                    <div className="card-body"> 
                        <div className='table-responsive'>
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Registration Id</td>
                                        <td>Enquiry Id</td>
                                        <td>Name</td>
                                        <td>Birthdate</td>
                                        <td>Age</td>
                                        <td>Email</td>
                                        <td>Gender</td>
                                        <td>Mobile Number</td>
                                        <td>Alternate Mobile Number</td>
                                        <td>Pan Number</td>
                                        <td>Adhar number</td>

                                        <td>Home Amount Paid</td>
                                        <td>TotalLoan</td>
                                        <td>LoanTenure</td>
                                        <td>InterestRate</td>
                                        <td>Education</td>
                                        <td>Address</td>
                                        <td>HouseNo2</td>
                                        <td>Street2</td>
                                        <td>Area2</td>
                                        <td>City2</td>
                                        <td>District2</td>
                                        <td>State2</td>
                                        <td>Pincode2</td>
                                        <td>LoanAmt</td>
                                        <td>Tenure</td>
                                        <td>PaidAmt</td>
                                        <td>RemainingAmt</td>
                                        <td>Status</td>
                                        <td>Remark</td>
                                        <td>AcctType</td>
                                        <td>AcctBalance</td>
                                        <td>AcctHolderName</td>
                                        <td>AcctStatus</td>
                                        <td>AcctNo</td>
                                        <td>PropertyType</td>

                                        <td>PropertyPrice</td>
                                        <td>ConstructionPrice</td>
                                        <td>PropertyHouseNo</td>
                                        <td>PropertyStreet</td>
                                        <td>PropertyArea</td>
                                        <td>PropertyCity</td>
                                        <td>PropertyDistrict</td>
                                        <td>PropertyState</td>
                                        <td>PropertyPincode</td>
                                        <td>GuarantorName</td>

                                        <td>GuarantorDob</td>
                                        <td>Relationship with customer</td>
                                        <td>GuarantorMobNo</td>
                                        <td>GuarantorAdharNo</td>
                                        <td>JobDetails</td>
                                        <td>GuarantorHouseNo</td>
                                        <td>GuarantorStreet</td>
                                        <td>GuarantorArea</td>
                                        <td>GuarantorCity</td>
                                        <td>GuarantorDistrict</td>
                                        <td>GuarantorState</td>
                                        <td>GuarantorPincode</td>
                                        <td>Verification</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {registrationData && registrationData.map(registration => (
                                        <tr key={registration.regId}>
                                            <td>{registration.regId}</td>
                                            <td>{registration.enquiryId}</td>
                                            <td>{registration.name}</td>
                                            <td>{new Date(registration.birthdate).toLocaleString()}</td>
                                            <td>{registration.age}</td>
                                            <td>{registration.email}</td>
                                            <td>{registration.gender}</td>
                                            <td>{registration.mobileNo}</td>
                                            <td>{registration.alternateMobNo}</td>
                                            <td>{registration.panNo}</td>
                                            <td>{registration.adharNo}</td>
                                            <td>{registration.homeAmtPaid}</td>
                                            <td>{registration.totalLoan}</td>
                                            <td>{registration.loanTenure}</td>
                                            <td>{registration.interestRate}</td>
                                            <td>{registration.education}</td>
                                            <td>{registration.houseNo}, {registration.street}, {registration.area}, {registration.city}, {registration.district}, {registration.state}, {registration.pincode}</td>
                                            <td>{registration.houseNo2}</td>
                                            <td>{registration.street2}</td>
                                            <td>{registration.area2}</td>
                                            <td>{registration.city2}</td>
                                            <td>{registration.district2}</td>
                                            <td>{registration.state2}</td>
                                            <td>{registration.pincode2}</td>
                                            <td>{registration.loanAmt}</td>
                                            <td>{registration.tenure}</td>
                                            <td>{registration.paidAmt}</td>
                                            <td>{registration.remainingAmt}</td>
                                            <td>{registration.status}</td>
                                            <td>{registration.remark}</td>
                                            <td>{registration.acctType}</td>
                                            <td>{registration.acctBalance}</td>
                                            <td>{registration.acctHolderName}</td>
                                            <td>{registration.acctStatus}</td>
                                            <td>{registration.acctNo}</td>
                                            <td>{registration.propertyType}</td>
                                            <td>{registration.propertyPrice}</td>
                                            <td>{registration.constructionPrice}</td>
                                            <td>{registration.propertyHouseNo}</td>
                                            <td>{registration.propertyStreet}</td>
                                            <td>{registration.propertyArea}</td>
                                            <td>{registration.propertyCity}</td>
                                            <td>{registration.propertyDistrict}</td>
                                            <td>{registration.propertyState}</td>
                                            <td>{registration.propertyPincode}</td>
                                            <td>{registration.guarantorName}</td>
                                            <td>{registration.guarantorDob}</td>
                                            <td>{registration.customerRelation}</td>
                                            <td>{registration.guarantorMobNo}</td>
                                            <td>{registration.guarantorAdharNo}</td>
                                            <td>{registration.jobDetails}</td>
                                            <td>{registration.guarantorHouseNo}</td>
                                            <td>{registration.guarantorStreet}</td>
                                            <td>{registration.guarantorArea}</td>
                                            <td>{registration.guarantorCity}</td>
                                            <td>{registration.guarantorDistrict}</td>
                                            <td>{registration.guarantorState}</td>
                                            <td>{registration.guarantorPincode}</td>
                                            {/* {
                                                registration.enquiryId &&  */}                                        
                                                <td>
                                                    <NavLink to={`/cm/docVerification/${registration.enquiryId}`}><button type='button' className='btn btn-primary'>Verify Documents</button></NavLink>
                                                </td>
                                            {/* } */}
                                        </tr>))
                                    }
                                </tbody>
                            </table>
                        </div>
                     </div>
                </div> 
            </div>
        </div>
    );
}

export default CmRegistrationList;