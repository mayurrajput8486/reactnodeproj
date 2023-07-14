import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createEnquiry } from "../../Service/Service";

const EnquiryCreate = () => {
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [adharNumber, setAdharNumber] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const addEnquiryHandler = (e) => {
        e.preventDefault();
        const enquiryData = {fullName, birthDate, email, gender, phoneNumber, panNumber, adharNumber, address, age};
        console.log(enquiryData);

        createEnquiry(enquiryData).then((res) => {
            alert('Enquiry Added Successfully!');
            navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        });

        /* axios.post('http://localhost:3001/api/createEnquiry', enquiryData).then((res) => {
            alert('Enquiry Added Successfully!');
            navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        }); */

        /* fetch('http://localhost:3001/api/createEnquiry',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(enquiryData)
        }).then((res) => {
            alert('Enquiry Added Successfull!');
            navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        }); */
    }

    return(
        <div className="main">
            <div className="row">
                <div className="offset-lg-2 col-lg-8">
                    <div className="container mt-4">
                        <form className="container" onSubmit={addEnquiryHandler} >
                            <div className="card">
                                <div className="card-header text-center">
                                    <h2>Add Enquiry</h2>
                                </div>         
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="fullname">Full Name: </label>
                                                <input type="text" placeholder='Enter Full Name' className="form-control" id="fullname" name="fullname" autoComplete="off" required value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email: </label>
                                                <input type="email" placeholder='Enter Email' className="form-control" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} value={email}  autoComplete="off" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="phoneNumber">Phone Number: </label>
                                                <input type="tel" placeholder='Enter Phone Number' className="form-control" id="phoneNumber" name="phoneNumber" autoComplete="off" pattern="[0-9]{10}" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="birthDate">BirthDate: </label>
                                                <input type="date" className="form-control" id="birthDate" name="birthDate" autoComplete="off" value={birthDate} onChange={(e) => {setBirthDate(e.target.value)}} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="adharNumber">Adhar Number: </label>
                                                <input type="tel" placeholder='Enter Adhar Number' className="form-control" id="adharNumber" name="adharNumber" autoComplete="off" value={adharNumber} onChange={(e) => {setAdharNumber(e.target.value)}} required pattern="[0-9]{12}" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="panNumber">Pan Number: </label>
                                                <input type="tel" placeholder='Enter Pan Number' className="form-control" id="panNumber" name="panNumber" autoComplete="off" value={panNumber} onChange={(e) => {setPanNumber(e.target.value)}} required pattern="[0-9]{10}" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="gender">Gender: </label><br/>
                                                <input type="radio" id="male" name="gender" value="male" onChange={(e) => {setGender(e.target.value)}} />
                                                <label> Male</label>

                                                <input type="radio" id="female" name="gender" value="female" onChange={(e) => {setGender(e.target.value)}} />
                                                <label> Female</label>

                                                <input type="radio" id="other" name="gender" value="other" onChange={(e) => {setGender(e.target.value)}} />
                                                <label> Other</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="age">Age: </label>
                                                <input type="number" placeholder='Enter Age' className="form-control" id="age" name="age" autoComplete="off" required value={age} onChange={(e) => {setAge(e.target.value)}} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="address">Address: </label>
                                                <textarea className="form-control" rows="3" id="address" name="address" placeholder="Enter Address" value={address} onChange={(e) => {setAddress(e.target.value)}} required></textarea>
                                            </div>
                                        </div>
                                    </div>                
                                </div>
                                <div className="card-footer">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>                
        </div>
    );
}
export default EnquiryCreate;