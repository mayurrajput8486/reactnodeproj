import { useEffect, useState } from "react";
import { getAllRegistrationData, getSanctionLetterData } from '../../Service/Service';
import { useNavigate } from "react-router-dom";

const ReSanctionLetter = () => {
    const [registrationData, setRegistrationData] = useState(null);
    const [sanctionData, setSanctionData] = useState(null);
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getAllRegistrationData().then((response) => {
            setRegistrationData(response.data.response);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const getSanctionLetter = (regId) => {
        getSanctionLetterData(regId).then((response) => {
            if(response.data.response[0]){
                setSanctionData(response.data.response[0]);
                setIsShown(current => !current);
            }
        }).catch((err) => {
            console.log(err);
        });      
    };

    return (
        <div className="main">
            <div className="container">
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>DOB</td>
                            <td>Gender</td>
                            <td>Email Id</td>
                            <td>Mobile No</td>
                            <td>Sanction Letter</td>
                        </tr>
                    </thead>
                    <tbody>
                        {registrationData && registrationData.map(registration => (
                            <tr key={registration.regId}>
                                <td>{registration.regId}</td>
                                <td>{registration.name}</td>
                                <td>{new Date(registration.birthdate).toLocaleString() }</td>
                                <td>{registration.gender}</td>
                                <td>{registration.email}</td>
                                <td>{registration.mobileNo}</td>
                                <td><a onClick={() => { getSanctionLetter(registration.regId) }} className="btn btn-success">Check Sanction Letter</a>&nbsp;</td>
                            </tr>))
                        }
                    </tbody>
                </table>

                {/* Sanction letter - start */}
                { isShown && (
                    <div className="card" >
                        <div className='card-header text-center'><h2>Sanction Letter</h2></div>
                        <div className="card-body" id='sanctionLetter'> 
                            <div className='table-responsive'>
                                <p>Dear Sir/Mam,</p>
                                <p>Thank you for choosing <b>Home Loan</b> based on the application and information provided therein, we are pleased to extend an offer to you for a loan as per the preliminary terms and conditions mentioned below: </p>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>    
                                            <td>Sanction Date:</td>
                                            <td>{ new Date(sanctionData.sanctionDate).toLocaleString()}</td>
                                        </tr>
                                        <tr>    
                                            <td>Applicant Name.:</td>
                                            <td>{sanctionData.name}</td>
                                        </tr>
                                        <tr>    
                                            <td>Mobile No.:</td>
                                            <td>{sanctionData.mobileNo}</td>
                                        </tr>
                                        <tr>    
                                            <td>Loan Amount Sanctioned:</td>
                                            <td>{sanctionData.loanAmtSanctioned}</td>
                                        </tr>
                                        <tr>    
                                            <td>Annual Interest Rate:</td>
                                            <td>{sanctionData.interestRate}</td>
                                        </tr>
                                        <tr>    
                                            <td>Loan Tenure :</td>
                                            <td>{sanctionData.loanTenure}</td>
                                        </tr>
                                        <tr>    
                                            <td>Amount of EMI:</td>
                                            <td>{sanctionData.emi}</td>
                                        </tr>
                                        <tr>    
                                            <td>Total amount payable:</td>
                                            <td>{sanctionData.payableAmt}</td>
                                        </tr>
                                        <tr>    
                                            <td>Payment Mode:</td>
                                            <td>Cheque</td>
                                        </tr>
                                        <tr>    
                                            <td>Remark :</td>
                                            <td>Your loan request is approved. Please give Confirmation to proceed for loan disbursement</td>
                                        </tr>
                                        <tr>    
                                            <td>Terms and conditions:</td>
                                            <td>Once your loan has been disbursed, monthly EMI will be debited from your respective bank account</td>
                                        </tr>                                        
                                        <tr>    
                                            <td>Status :</td>
                                            <td>Sanction letter sent to the customer</td>
                                        </tr>
                                        <tr>    
                                            <td>Address:</td>
                                            <td>{sanctionData.propertyAddress}</td>
                                        </tr>
                                        <tr>    
                                            <td>Signature</td>
                                            <td>Approved</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3>Additional conditions to comply prior to loan disbursal</h3>
                                <ol>
                                    <li>Repayment from Loan system</li>
                                    <li>Legal velting and search to be conducted</li>
                                    <li>NOC and offered collateral</li>
                                    <li>Confirmation from official ID and copy of ID</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                )}
                {/* Sanction letter - end */}
            </div>
        </div>
    );
};

export default ReSanctionLetter;