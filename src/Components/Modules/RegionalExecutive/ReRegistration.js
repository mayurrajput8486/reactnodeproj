import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRegistration } from "../../Service/Service";

const ReRegistration = () => {
    const navigate = useNavigate();
    const {enquiryId} = useParams();

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [mobileNo, setMobNo] = useState('');
    const [alternateMobNo, setAlternateMobNo] = useState('');
    const [panNo, setPanNo] = useState('');
    const [adharNo, setAdharNo] = useState('');
    const [homeAmtPaid, setHomeAmtPaid] = useState('');
    const [totalLoan, setTotalLoan] = useState('');
    const [loanTenure, setLoanTenure] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [education, setEducation] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [pincode, setpincode] = useState('');
    const [houseNo2, setHouseNo2] = useState('');
    const [street2, setStreet2] = useState('');
    const [area2, setArea2] = useState('');
    const [city2, setCity2] = useState('');
    const [district2, setDistrict2] = useState('');
    const [state2, setState2] = useState('');
    const [pincode2, setPincode2] = useState('');
    const [loanAmt, setLoanAmt] = useState('');
    const [tenure, setTenure] = useState('');
    const [paidAmt, setPaidAmt] = useState('');
    const [remainingAmt, setRemainingAmt] = useState('');
    const [status, setStatus] = useState('');
    const [remark, setRemark] = useState('');
    const [acctType, setAcctType] = useState('');
    const [acctBalance, setAcctBalance] = useState('');
    const [acctHolderName, setAcctHolderName] = useState('');
    const [acctStatus, setAcctStatus] = useState('');
    const [acctNo, setAcctNo] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [propertyPrice, setPropertyPrice] = useState('');
    const [constructionPrice, setConstructionPrice] = useState('');
    const [propertyHouseNo, setPropertyHouseNo] = useState('');
    const [propertyStreet, setPropertyStreet] = useState('');
    const [propertyArea, setpropertyArea] = useState('');
    const [propertyCity, setPropertyCity] = useState('');
    const [propertyDistrict, setPropertyDistrict] = useState('');
    const [propertyState, setPropertyState] = useState('');
    const [propertyPincode, setPropertyPincode] = useState('');
    const [guarantorName, setGuarantorName] = useState('');
    const [guarantorDob, setGuarantorDob] = useState('');
    const [customerRelation, setCustomerRelation] = useState('');
    const [guarantorMobNo, setGuarantorMobNo] = useState('');
    const [guarantorAdharNo, setGuarantorAdharNo] = useState('');
    const [jobDetails, setJobDetails] = useState('');
    const [guarantorHouseNo, setGuarantorHouseNo] = useState('');
    const [guarantorStreet, setGuarantorStreet] = useState('');
    const [guarantorArea, setGuarantorArea] = useState('');
    const [guarantorCity, setGuarantorCity] = useState('');
    const [guarantorDistrict, setGuarantorDistrict] = useState('');
    const [guarantorState, setGuarantorState] = useState('');
    const [guarantorPincode, setGuarantorPincode] = useState('');

    const getPermanantAddr = (e) => {
        //console.log(e);
        setHouseNo2(houseNo);
        setStreet2(street);
        setArea2(area);
        setCity2(city);
        setDistrict2(district);
        setState2(state);
        setPincode2(pincode);
    };

    const registationHandler = (e) => {
        e.preventDefault();
        const registrationData = { name, birthDate, age, email, gender, mobileNo, alternateMobNo, panNo, adharNo, homeAmtPaid, totalLoan, loanTenure, interestRate, education, houseNo, street, area, city, district, state, pincode, houseNo2, street2, area2, city2, district2, state2, pincode2, loanAmt, tenure, paidAmt, remainingAmt, status, remark, acctType, acctBalance, acctHolderName, acctStatus, acctNo, propertyType, propertyPrice, constructionPrice, propertyHouseNo, propertyStreet, propertyArea, propertyCity, propertyDistrict, propertyState, propertyPincode, guarantorName, guarantorDob, customerRelation, guarantorMobNo, guarantorAdharNo, jobDetails, guarantorHouseNo, guarantorStreet, guarantorArea, guarantorCity, guarantorDistrict, guarantorState, guarantorPincode, enquiryId};
        //console.log(registrationData); 

        createRegistration(registrationData).then((res) => {
            alert('Registration Done Successfully!');
            navigate('/re/uploaddocuments/' + enquiryId);
        }).catch((err) => {
            console.log(err);
        });
    };

    return(
        <>
            <div className="main">
                <div className="row">
                    <form className="container" onSubmit={registationHandler}>
                        <div className="card">
                            <div className="card-header text-center">
                                <h2> Registration Form</h2>
                            </div>
                            <div className="card-body">
                                <fieldset>
                                    <legend>Basic Information</legend>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="name">Name </label>
                                                <input type="text" className="form-control" id="name" name="name" autoComplete="off" required value={name} onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="birthDate">BirthDate </label>
                                                <input type="date" className="form-control" id="birthDate" name="birthDate" value={birthDate} onChange={(e) => { setBirthDate(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="age">Age </label>
                                                <input type="number" className="form-control" id="age" name="age" autoComplete="off" required value={age} onChange={(e) => { setAge(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="email">Email </label>
                                                <input type="email" className="form-control" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} autoComplete="off" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="gender">Gender </label><br />
                                                <input type="radio" id="male" name="gender" value="male" onChange={(e) => { setGender(e.target.value) }} />
                                                <label> Male</label>

                                                <input type="radio" id="female" name="gender" value="female" onChange={(e) => { setGender(e.target.value) }} />
                                                <label> Female</label>

                                                <input type="radio" id="other" name="gender" value="other" onChange={(e) => { setGender(e.target.value) }} />
                                                <label> Other</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="mobileNo">Mobile Number</label>
                                                <input type="tel" className="form-control" id="mobileNo" name="mobileNo" autoComplete="off" pattern="[0-9]{10}" value={mobileNo} onChange={(e) => { setMobNo(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="alternateMobNo">Alternate Mobile Number </label>
                                                <input type="tel" className="form-control" id="mobileNo" name="alternateMobNo" autoComplete="off" pattern="[0-9]{10}" value={alternateMobNo} onChange={(e) => { setAlternateMobNo(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="adharNo">Adhar Number </label>
                                                <input type="number" className="form-control" id="adharNumber" name="adharNo" autoComplete="off" value={adharNo} onChange={(e) => { setAdharNo(e.target.value) }} required pattern="[0-9]{12}" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="panNo">Pan Number </label>
                                                <input type="number" className="form-control" id="panNo" name="panNo" autoComplete="off" value={panNo} onChange={(e) => { setPanNo(e.target.value) }} required pattern="[0-9]{10}" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="homeAmtPaid">Amount paid for Home </label>
                                                <input type="number" className="form-control" id="homeAmtPaid" name="homeAmtPaid" autoComplete="off" value={homeAmtPaid} onChange={(e) => { setHomeAmtPaid(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="totalLoan">Total Loan Required </label>
                                                <input type="number" className="form-control" id="totalLoan" name="totalLoan" autoComplete="off" value={totalLoan} onChange={(e) => { setTotalLoan(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="loanTenure">Tenure Of Loan: </label>
                                                <input type="number" className="form-control" id="loanTenure" name="loanTenure" autoComplete="off" value={loanTenure} onChange={(e) => { setLoanTenure(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="interestRate">Annual Interest Rate </label>
                                                <input type="number" className="form-control" id="interest" name="interestRate" autoComplete="off" value={interestRate} onChange={(e) => { setInterestRate(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="education">Education </label>
                                                <input type="text" className="form-control" id="education" name="education" autoComplete="off" value={education} onChange={(e) => { setEducation(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset>
                                    <legend>Customer Address</legend>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="houseno">House Number</label>
                                                <input type="text" className="form-control" id="houseno" name="houseNo" autoComplete="off" value={houseNo} onChange={(e) => { setHouseNo(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="street">Street </label>
                                                <input type="text" className="form-control" id="street" name="street" autoComplete="off" value={street} onChange={(e) => { setStreet(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="area">Area</label>
                                                <input type="text" className="form-control" id="area" name="area" autoComplete="off" value={area} onChange={(e) => { setArea(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="city">City </label>
                                                <input type="text" className="form-control" id="city" name="city" autoComplete="off" value={city} onChange={(e) => { setCity(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="district">District </label>
                                                <input type="text" className="form-control" id="district" name="district" autoComplete="off" value={district} onChange={(e) => { setDistrict(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="state">State</label>
                                                <input type="text" className="form-control" id="state" name="state" autoComplete="off" value={state} onChange={(e) => { setState(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="pincode">Pincode</label>
                                                <input type="number" className="form-control" id="pincode" name="pincode" autoComplete="off" value={pincode} onChange={(e) => { setpincode(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset>
                                    <legend>Local Address</legend>
                                    <div className="row">
                                        <div className="form-group">
                                            <input type="checkbox" id="checkBox" onClick={getPermanantAddr} /> <label>Same as permanent address</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="houseNo2">House Number</label>
                                                <input type="text" className="form-control" id="houseNo2" name="houseNo2" autoComplete="off" value={houseNo2} onChange={(e) => { setHouseNo2(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="street2">Street </label>
                                                <input type="text" className="form-control" id="street2" name="street2" autoComplete="off" value={street2} onChange={(e) => { setStreet2(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="area2">Area</label>
                                                <input type="text" className="form-control" id="area2" name="area2" autoComplete="off" value={area2} onChange={(e) => { setArea2(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="city2">City </label>
                                                <input type="text" className="form-control" id="city2" name="city2" autoComplete="off" value={city2} onChange={(e) => { setCity2(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="district2">District </label>
                                                <input type="text" className="form-control" id="district2" name="district2" autoComplete="off" value={district2} onChange={(e) => { setDistrict2(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="state2">State</label>
                                                <input type="text" className="form-control" id="state2" name="state2" autoComplete="off" value={state2} onChange={(e) => { setState2(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="pincode2">Pincode</label>
                                                <input type="number" className="form-control" id="pincode2" name="pincode2" autoComplete="off" value={pincode2} onChange={(e) => { setPincode2(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset>
                                    <legend>Previous Loan Information</legend>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="loanAmt">Loan Amount</label>
                                                <input type="number" className="form-control" id="loanAmt" name="loanAmt" autoComplete="off" value={loanAmt} onChange={(e) => { setLoanAmt(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="tenure">Tenure</label>
                                                <input type="text" className="form-control" id="tenure" name="tenure" autoComplete="off" value={tenure} onChange={(e) => { setTenure(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="paidAmt">Paid Amount </label>
                                                <input type="number" className="form-control" id="paidAmt" name="paidAmt" autoComplete="off" value={paidAmt} onChange={(e) => { setPaidAmt(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="remainingAmt">Remaining Amount</label>
                                                <input type="number" className="form-control" id="remainingAmt" name="remainingAmt" autoComplete="off" value={remainingAmt} onChange={(e) => { setRemainingAmt(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="status">Status</label>
                                                <input type="text" className="form-control" id="status" name="status" autoComplete="off" value={status} onChange={(e) => { setStatus(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="remark">Remark</label>
                                                <input type="text" className="form-control" id="remark" name="remark" autoComplete="off" value={remark} onChange={(e) => { setRemark(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <hr />
                                <fieldset>
                                    <legend>Account Details</legend>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="acctType">Account Type</label>
                                                <input type="text" className="form-control" id="acctType" name="acctType" autoComplete="off" value={acctType} onChange={(e) => { setAcctType(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="acctBalance">Account Balance</label>
                                                <input type="number" className="form-control" id="acctBalance" name="acctBalance" autoComplete="off" value={acctBalance} onChange={(e) => { setAcctBalance(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="acctHolderName">Account Holder Name</label>
                                                <input type="text" className="form-control" id="acctHolderName" name="acctHolderName" autoComplete="off" value={acctHolderName} onChange={(e) => { setAcctHolderName(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="acctStatus">Account Status</label>
                                                <input type="text" className="form-control" id="acctStatus" name="acctStatus" autoComplete="off" value={acctStatus} onChange={(e) => { setAcctStatus(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="acctNo">Account Number</label>
                                                <input type="number" className="form-control" id="acctNo" name="acctNo" autoComplete="off" value={acctNo} onChange={(e) => { setAcctNo(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="remark">Remark</label>
                                                <input type="text" className="form-control" id="remark" name="remark" autoComplete="off" value={remark} onChange={(e) => { setRemark(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <hr />
                                <fieldset>
                                    <legend>Property Information</legend>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="propertyType">Property Type</label>
                                                <input type="text" className="form-control" id="propertyType" name="propertyType" autoComplete="off" value={propertyType} onChange={(e) => { setPropertyType(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="propertyPrice">Property Price</label>
                                                <input type="number" className="form-control" id="propertyPrice" name="propertyType" autoComplete="off" value={propertyPrice} onChange={(e) => { setPropertyPrice(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="constructionPrice">Construction Price</label>
                                                <input type="number" className="form-control" id="constructionPrice" name="constructionPrice" autoComplete="off" value={constructionPrice} onChange={(e) => { setConstructionPrice(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <hr />
                                <fieldset>
                                    <legend>Property Local Address</legend>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="propertyHouseNo">House Number</label>
                                                <input type="text" className="form-control" id="propertyHouseNo" name="propertyHouseNo" autoComplete="off" value={propertyHouseNo} onChange={(e) => { setPropertyHouseNo(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="propertyStreet">Street</label>
                                                <input type="text" className="form-control" id="propertyStreet" name="propertyStreet" autoComplete="off" value={propertyStreet} onChange={(e) => { setPropertyStreet(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="propertyArea">Area </label>
                                                <input type="text" className="form-control" id="propertyArea" name="propertyArea" autoComplete="off" value={propertyArea} onChange={(e) => { setpropertyArea(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="propertyCity">City </label>
                                                <input type="text" className="form-control" id="propertyCity" name="city" autoComplete="off" value={propertyCity} onChange={(e) => { setPropertyCity(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="propertyDistrict">District </label>
                                                <input type="text" className="form-control" id="propertyDistrict" name="propertyDistrict" autoComplete="off" value={propertyDistrict} onChange={(e) => { setPropertyDistrict(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="propertyState">State</label>
                                                <input type="text" className="form-control" id="propertyState" name="propertyState" autoComplete="off" value={propertyState} onChange={(e) => { setPropertyState(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="propertyPincode">Pincode</label>
                                                <input type="number" className="form-control" id="propertyPincode" name="propertyPincode" autoComplete="off" value={propertyPincode} onChange={(e) => { setPropertyPincode(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <hr />
                                <fieldset>
                                    <legend>Guarantor Details</legend>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="guarantorName">Name </label>
                                                <input type="text" className="form-control" id="guarantorName" name="guarantorName" autoComplete="off" required value={guarantorName} onChange={(e) => { setGuarantorName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="guarantorDob">BirthDate: </label>
                                                <input type="date" className="form-control" id="guarantorDob" name="guarantorDob" autoComplete="off" value={guarantorDob} onChange={(e) => { setGuarantorDob(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="customerRelation">Relationship With Customer </label>
                                                <input type="text" className="form-control" id="customerRelation" name="customerRelation" autoComplete="off" value={customerRelation} onChange={(e) => { setCustomerRelation(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="guarantorMobNo">mobile No</label>
                                                <input type="tel" className="form-control" id="guarantorMobNo" name="guarantorMobNo" autoComplete="off" value={guarantorMobNo} onChange={(e) => { setGuarantorMobNo(e.target.value) }} required pattern="[0-9]{10}" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="guarantorAdharNo">Adhar Number </label>
                                                <input type="tel" className="form-control" id="guarantorAdharNo" name="guarantorAdharNo" autoComplete="off" value={guarantorAdharNo} onChange={(e) => { setGuarantorAdharNo(e.target.value) }} required pattern="[0-9]{12}" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="jobDetails">Job Details </label>
                                                <input type="text" className="form-control" id="jobDetails" name="jobDetails" autoComplete="off" value={jobDetails} onChange={(e) => { setJobDetails(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <hr />
                                <fieldset>
                                    <legend>Guarantor Local Address</legend>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="guarantorHouseNo">House Number</label>
                                                <input type="text" className="form-control" id="guarantorHouseNo" name="guarantorHouseNo" autoComplete="off" value={guarantorHouseNo} onChange={(e) => { setGuarantorHouseNo(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="guarantorStreet">Street</label>
                                                <input type="text" className="form-control" id="guarantorStreet" name="guarantorStreet" autoComplete="off" value={guarantorStreet} onChange={(e) => { setGuarantorStreet(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="guarantorArea">Area</label>
                                                <input type="text" className="form-control" id="guarantorArea" name="guarantorArea" autoComplete="off" value={guarantorArea} onChange={(e) => { setGuarantorArea(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="guarantorCity">City </label>
                                                <input type="text" className="form-control" id=" guarantorCity" name=" guarantorCity" autoComplete="off" value={guarantorCity} onChange={(e) => { setGuarantorCity(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="guarantorDistrict">District </label>
                                                <input type="text" className="form-control" id="guarantorDistrict" name="guarantorDistrict" autoComplete="off" value={guarantorDistrict} onChange={(e) => { setGuarantorDistrict(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="guarantorState">State</label>
                                                <input type="text" className="form-control" id="guarantorState" name="guarantorState" autoComplete="off" value={guarantorState} onChange={(e) => { setGuarantorState(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="guarantorPincode">Pincode</label>
                                                <input type="number" className="form-control" id="guarantorPincode" name="guarantorPincode" autoComplete="off" value={guarantorPincode} onChange={(e) => { setGuarantorPincode(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="card-footer">
                                <div className="col-lg-12">
                                    <div className="form-group text-end">
                                        <button type="submit" className="btn btn-primary">Register and next to Upload Documents</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default ReRegistration;