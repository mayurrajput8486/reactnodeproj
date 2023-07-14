import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns'
import { updateEnquiry } from "../../Service/Service";

const EnquiryEdit = () => {
    const navigate = useNavigate();
    const { enquiryId } = useParams();

    useEffect(() => {
        fetch('http://localhost:3001/api/getSingleEnquiry/' + enquiryId).then((response) => {
            return response.json();
        }).then((response) => {
            const result = response.response[0];
            const bdate = new Date(result.birthDate);
            //console.log('bdate = '+bdate);
            var year = bdate.getFullYear();
            var month = ("0" + (bdate.getMonth() + 1)).slice(-2);
            var date = ("0" + bdate.getDate()).slice(-2);

            var birthDate = year + "-" + month + "-" + date;
            //console.log('dateFormat = '+dateFormat);
             
            /*console.log('newdate = '+newdate);
            var newdate2 = newdate.split("/").reverse().join("/");
            console.log('newdate2 = '+newdate2); */
            //console.log(bdate.toLocaleDateString());
            //const bdate = format(result.birthDate, 'dd/mm/yyyy');
            setFullName(result.fullName);
            setBirthDate(birthDate);
            setEmail(result.email);
            setGender(result.gender);
            setPhoneNumber(result.phoneNumber);
            setPanNumber(result.panNumber);
            setAdharNumber(result.adharNumber);
            setAddress(result.address);
            setAge(result.age);

        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [adharNumber, setAdharNumber] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');

    const updateEnquiryHandler = (e) => {
        e.preventDefault();
        const enquiryData = { fullName, birthDate, email, gender, phoneNumber, panNumber, adharNumber, address, age };

        updateEnquiry(enquiryId, enquiryData).then((res) => {
            alert('Enquiry Updated Successfully!');
            navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        });

        /* fetch('http://localhost:3001/api/updateEnquiry/' + enquiryId, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(enquiryData)
        }).then((res) => {
            alert('Enquiry Updated Successfully!');
            navigate('/Enquiry/list');
        }).catch((err) => {
            console.log(err);
        }); */
    }
    
    return (
        <div className="main">
            <div className="row">
                <div className="offset-lg-2 col-lg-8">
                    <div className="container mt-4">
                        <form className="container" onSubmit={updateEnquiryHandler} >
                            <div className="card">
                                <div className="card-header text-center">
                                    <h2>Update Enquiry</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="fullname">Full Name: </label>
                                                <input type="text" placeholder='Enter Full Name' className="form-control" id="fullname" name="fullname" autoComplete="off" required value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="birthDate">BirthDate: </label>
                                                <input type="date" className="form-control" id="birthDate" name="birthDate" autoComplete="off" value={birthDate} onChange={(e) => { setBirthDate(e.target.value) }} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email: </label>
                                                <input type="email" placeholder='Enter Email' className="form-control" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} autoComplete="off" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="gender">Gender: </label><br />
                                                <input type="radio" id="male" name="gender"  value="male" onChange={(e) => { setGender(e.target.value) }} checked={ (gender == 'male') ? 'checked' : '' } />
                                                <label> Male</label>

                                                <input type="radio" id="female" name="gender" value="female" onChange={(e) => { setGender(e.target.value) }} checked={ (gender == 'female') ? 'checked' : '' }  />
                                                <label> Female</label>

                                                <input type="radio" id="other" name="gender" value="other" onChange={(e) => { setGender(e.target.value) }} checked={ (gender == 'other') ? 'checked' : '' } />
                                                <label> Other</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="phoneNumber">Phone Number: </label>
                                                <input type="tel" placeholder='Enter Phone Number' className="form-control" id="phoneNumber" name="phoneNumber" autoComplete="off" pattern="[0-9]{10}" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="panNumber">Pan Number: </label>
                                                <input type="tel" placeholder='Enter Pan Number' className="form-control" id="panNumber" name="panNumber" autoComplete="off" value={panNumber} onChange={(e) => { setPanNumber(e.target.value) }} required pattern="[0-9]{10}" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="adharNumber">Adhar Number: </label>
                                                <input type="tel" placeholder='Enter Adhar Number' className="form-control" id="adharNumber" name="adharNumber" autoComplete="off" value={adharNumber} onChange={(e) => { setAdharNumber(e.target.value) }} required pattern="[0-9]{12}" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="age">Age: </label>
                                                <input type="number" placeholder='Enter Age' className="form-control" id="age" name="age" autoComplete="off" required value={age} onChange={(e) => {setAge(e.target.value)}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="address">Address: </label>
                                                <textarea className="form-control" rows="3" id="address" name="address" placeholder="Enter Address" value={address} onChange={(e) => { setAddress(e.target.value) }} required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Update</button>
                                        {/* <Link to={"/enquiryList"} className="btn btn-danger">Back</Link> */}
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

export default EnquiryEdit;