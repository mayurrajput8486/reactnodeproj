import { useState, useEffect } from 'react';
import { getSingleRegistrationData, createSanctionLetter, sendSanctionEmail } from '../../Service/Service';
import { NavLink, useParams } from 'react-router-dom';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const CmSanctionLetter = () => {

    const [registrationData, setRegistrationData] = useState('');    
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

    const {regId} = useParams();

    useEffect(() => {
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
            setPayableAmt('1824580');
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    
    const sanctionLetterHandler = (e) =>{
        e.preventDefault();
        const sanctionData = {regId, name, mobileNo, interestRate, loanTenure, loanType, loanAmtSanctioned, letterValidity, emi, payableAmt, propertyAddress, sanctionDate};
        //setSanctionDatas(sanctionData);
        createSanctionLetter(sanctionData).then((res) => {
            console.log(res);
            /* generate pdf */
            //navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        });
    };

    const sendEmail = () =>{
        //xeqzasjeyburspzy
        const sanctionDatas = {regId, name, mobileNo, interestRate, loanTenure, loanType, loanAmtSanctioned, letterValidity, emi, payableAmt, propertyAddress, sanctionDate};
        //console.log('sanctionData = ',sanctionDatas);
        sendSanctionEmail(sanctionDatas).then((res) => {
            console.log(res);
            alert('Email sent successfully');
            //navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        });
    };

    const generatePDF = () =>{
        const input = document.getElementById('sanctionLetter');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${name}_sanction_letter.pdf`);
                
            });        
    };

    return (
        <div className="main" >
            <div className="container">
                <form className="container" onSubmit={sanctionLetterHandler}>
                    <div className="card" >
                        <div className='card-header text-center'><h2>Sanction Letter</h2></div>
                        <div className="card-body" id='sanctionLetter'> 
                            <div className='table-responsive'>
                                <p>Dear Sir/Mam,</p>
                                <p>Thank you for choosing <b>Home Loan</b> based on the application and information provided therein, we are pleased to extend an offer to you for a loan as per the preliminary terms and conditions mentioned below: </p>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>    
                                            <td>Application No.:</td>
                                            <td>{regId}</td>
                                        </tr>
                                        <tr>    
                                            <td>Applicant Name.:</td>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>    
                                            <td>Mobile No.:</td>
                                            <td>{mobileNo}</td>
                                        </tr>
                                        <tr>    
                                            <td>Loan Type:</td>
                                            <td>{loanType}</td>
                                        </tr>
                                        <tr>    
                                            <td>Loan Amount Sanctioned:</td>
                                            <td>{loanAmtSanctioned}</td>
                                        </tr>
                                        <tr>    
                                            <td>Annual Interest Rate:</td>
                                            <td>{interestRate}</td>
                                        </tr>
                                        <tr>    
                                            <td>Loan Tenure :</td>
                                            <td>{loanTenure}</td>
                                        </tr>
                                        <tr>    
                                            <td>Total Processing charges :</td>
                                            <td>Up to 0.25% to 0.5% of the total loan Amount</td>
                                        </tr>
                                        <tr>    
                                            <td>Sanction Letter validity:</td>
                                            <td>{letterValidity} days from the date of sanction</td>
                                        </tr>
                                        <tr>    
                                            <td>Amount of EMI(INR):</td>
                                            <td>{emi}</td>
                                        </tr>
                                        <tr>    
                                            <td>Total amount payable:</td>
                                            <td>{payableAmt}</td>
                                        </tr>
                                        <tr>    
                                            <td>Property Address:</td>
                                            <td>{propertyAddress}</td>
                                        </tr>
                                        <tr>    
                                            <td>Sanction Date:</td>
                                            <td>{<input type='date' name='sanctionDate' value={sanctionDate} onChange={(e) => { setSanctionDate(e.target.value) }} required />}</td>
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
                        <div className="card-footer">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                                    <a onClick={() => { sendEmail(regId) }} className="btn btn-info">Send E-mail</a>&nbsp;
                                    <a onClick={() => { generatePDF(regId) }} className="btn btn-success">Generate PDF</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CmSanctionLetter;