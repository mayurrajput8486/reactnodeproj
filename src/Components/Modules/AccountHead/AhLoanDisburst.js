import { useEffect, useState } from "react";
import { getAllSanctionLetterData, getSingleRegistrationData } from '../../Service/Service';

const AhLoanDisburst = () => {
    const [registrationData, setRegistrationData] = useState('');    
    const [sanctionData, setSanctionData] = useState(null);

    const [sanctionDate, setSanctionDate] = useState('');
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTenure, setLoanTenure] = useState('');
    const [loanType, setLoanType] = useState('');
    const [loanAmtSanctioned, setLoanAmtSanctioned] = useState('');
    const [letterValidity, setLetterValidity] = useState('');
    const [emi, setEmi] = useState('');
    const [payableAmt, setPayableAmt] = useState('');
    const [propertyAddress, setPropertyAddress] = useState('');
    const [sanctionDatas, setSanctionDatas] = useState('');

    useEffect(() => {
        getAllSanctionLetterData().then((response) => {
            console.log(response);
            setSanctionData(response.data.response);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const sendEmail = (regId) =>{
        /* get data by reg id to send email details */
        getSingleRegistrationData(regId).then((response) => {
            //console.log(response.data.response[0]);
            const address = response.data.response[0].propertyHouseNo + ', ' + response.data.response[0].propertyArea + ', ' + response.data.response[0].propertyCity + ', ' + response.data.response[0].propertyDistrict + ', ' + response.data.response[0].propertyState + ', ' + response.data.response[0].propertyPincode;

            setRegistrationData(response.data.response[0]);
            setName(response.data.response[0].name);
            setMobileNo(response.data.response[0].mobileNo);
            setInterestRate(response.data.response[0].interestRate);
            setLoanTenure(response.data.response[0].loanTenure);            
            setPropertyAddress(address);
            setLoanType('Home Loan');
            setLoanAmtSanctioned('1000000');
            setLetterValidity('180');
            setEmi('8000');
            setPayableAmt('182458   0');
        }).catch((err) => {
            console.log(err);
        });

        /* send email */
        const sanctionDatas = {regId, name, mobileNo, interestRate, loanTenure, loanType, loanAmtSanctioned, letterValidity, emi, payableAmt, propertyAddress, sanctionDate};
        console.log('sanctionData = ',sanctionDatas);
        /* sendSanctionEmail(sanctionDatas).then((res) => {
            console.log(res);
            alert('Email sent successfully');
            //navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        }); */
    };

    return (
        <div className="main">
            <div className="container">
                <div className='table-responsive'>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Sanction Id</td>
                                <td>Sanction Date</td>
                                <td>Applicant Name</td>
                                <td>Contact Details</td>
                                <td>Loan Amount Sanctioned</td>
                                <td>Annual Interest Rate</td>
                                <td>Tenure of Loan</td> 
                                <td>Monthly EMI Amount</td>
                                <td>Loan Amount Payable</td>
                                <td>Payment Mode</td>
                                <td>Address</td>
                                <td>Signature Status</td>
                                <td>Amount Disbursed</td>
                                {/* <td>Terms and conditions</td> */}
                                <td>Send Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {sanctionData && sanctionData.map(ledger => (
                                <tr key={ledger.sanctionId}>
                                    <td>{ledger.sanctionId}</td>
                                    <td>{new Date(ledger.sanctionDate).toLocaleString()}</td>
                                    <td>{ledger.name}</td>
                                    <td>{ledger.mobileNo}</td>
                                    <td>{ledger.loanAmtSanctioned}</td>
                                    <td>{ledger.interestRate}</td>
                                    <td>{ledger.loanTenure}</td>  
                                    <td>{ledger.emi}</td>
                                    <td>{ledger.payableAmt}</td>
                                    <td>Cheque</td>
                                    <td>{ledger.propertyAddress}</td>
                                    <td>Approved</td>
                                    <td><input type="text" value="1000000" name="disbursedAmt" /></td>
                                    {/* <td>Once your loan has been disbursed, monthly EMI will be debited from your respective bank account</td> */}
                                    <td><a onClick={() => { sendEmail(ledger.regId) }} className="btn btn-info">Send E-mail</a></td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AhLoanDisburst;