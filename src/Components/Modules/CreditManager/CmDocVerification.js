import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createVerifyDocuments, getSingleDocument } from '../../Service/Service';
import {Buffer} from 'buffer';

const CmDocVerification = () => {
    const [documentsData, setDocumentsData] = useState(null);
    const [addressProof, setAddressProof] = useState(null);
    const [pancard, setPancard] = useState(null);
    const [adharcard, setAdharcard] = useState(null);
    const [itr, setItr] = useState(null);
    const [thumb, setThumb] = useState(null);
    const [signature, setSignature] = useState(null);
    const [bankCheque, setBankCheque] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [salarySlip, setSalarySlip] = useState(null);
    const [documentId, setDocumentId] = useState(null);
    const [regId, setRegId] = useState(null);

    const {enquiryId} = useParams();
    const navigate = useNavigate();

    const [addrStatus, setAddrStatus] = useState('');
    const [panStatus, setPanStatus] = useState('');
    const [adharStatus, setAdharStatus] = useState('');
    const [itrStatus, setItrStatus] = useState('');
    const [thumbStatus, setThumbStatus] = useState('');
    const [signStatus, setSignStatus] = useState('');
    const [bankChequeStatus, setBlankChequeStatus] = useState('');
    const [photoStatus, setPhotoStatus] = useState('');
    const [propertyStatus, setPropertyStatus] = useState('');
    const [salaryStatus, setSalaryStatus] = useState('');

    useEffect(() => {
        getSingleDocument(enquiryId).then((response) => {
            console.log('data = ', response.data.response[0]);
            setDocumentId(response.data.response[0].documentId);
            setRegId(response.data.response[0].regId);
            setAddressProof(Buffer.from(response.data.response[0].addressProof.data, "base64").toString());
            setPancard(Buffer.from(response.data.response[0].pancard.data, "base64").toString());
            setAdharcard(Buffer.from(response.data.response[0].adharcard.data, "base64").toString());
            setItr(Buffer.from(response.data.response[0].itr.data, "base64").toString());
            setThumb(Buffer.from(response.data.response[0].thumb.data, "base64").toString());
            setSignature(Buffer.from(response.data.response[0].signature.data, "base64").toString());
            setBankCheque(Buffer.from(response.data.response[0].bankCheque.data, "base64").toString());
            setPhoto(Buffer.from(response.data.response[0].photo.data, "base64").toString());
            setPropertyDetails(Buffer.from(response.data.response[0].propertyDetails.data, "base64").toString());
            setSalarySlip(Buffer.from(response.data.response[0].salarySlip.data, "base64").toString());setDocumentsData(response.data.response[0]);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const documentHandler = (e) => {
        e.preventDefault();
        const verifyData = {addrStatus, panStatus, itrStatus, thumbStatus, signStatus, bankChequeStatus, photoStatus, propertyStatus, salaryStatus, adharStatus, documentId, regId};
        console.log(verifyData);

        createVerifyDocuments(verifyData).then((res) => {
            alert('Document Verification Done Successfully!');
            navigate('/cm/sanctionletter/' + regId);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className='container mt-5 bg-light'>
            <div className="main">
                <div className="container">
                    
                    <form className="container" onSubmit={documentHandler} >
                        <div className='row'>
                            <div className="card col-3">Document Id:</div>
                            <div className="card col-3">{ documentId }</div>
                            <div className="card col-3">Customer Id: </div>
                            <div className="card col-3">{ regId }</div>
                        </div>
                        <div className='row'>
                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Address Proof</h4>
                                    <img src={`${addressProof}` } width="200" height="100" alt="addressProof" /><br />
                                    <input type="radio" name="addrStatus" value="verified" onChange={(e) => {setAddrStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="addrStatus" value="rejected" onChange={(e) => {setAddrStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>

                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Pancard</h4>
                                    <img src={`${pancard}` } width="200" height="100" alt="pancard" />
                                    <input type="radio" name="panStatus" value="verified" onChange={(e) => {setPanStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="panStatus" value="rejected" onChange={(e) => {setPanStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>
                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Adharcard</h4>
                                    <img src={`${adharcard}` } width="200" height="100" alt="adharcard" />
                                    <input type="radio" name="adharStatus" value="verified" onChange={(e) => {setAdharStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="adharStatus" value="rejected" onChange={(e) => {setAdharStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>

                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">ITR</h4>
                                    <img src={`${itr}` } width="200" height="100" alt="itr" />
                                    <input type="radio" name="itrStatus" value="verified" onChange={(e) => {setItrStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="itrStatus" value="rejected" onChange={(e) => {setItrStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Thumb</h4>
                                    <img src={`${thumb}` } width="200" height="100" alt="thumb" /><br />
                                    <input type="radio" name="thumbStatus" value="verified" onChange={(e) => {setThumbStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="thumbStatus" value="rejected" onChange={(e) => {setThumbStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>

                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Signature</h4>
                                    <img src={`${signature}` } width="200" height="100" alt="signature" />
                                    <input type="radio" name="signStatus" value="verified" onChange={(e) => {setSignStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="signStatus" value="rejected" onChange={(e) => {setSignStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>
                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Blank Cheque</h4>
                                    <img src={`${bankCheque}` } width="200" height="100" alt="bankCheque" />
                                    <input type="radio" name="bankChequeStatus" value="verified" onChange={(e) => {setBlankChequeStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="bankChequeStatus" value="rejected" onChange={(e) => {setBlankChequeStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>

                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Photo</h4>
                                    <img src={`${photo}` } width="200" height="100" alt="itr" />
                                    <input type="radio" name="photoStatus" value="verified" onChange={(e) => {setPhotoStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="photoStatus" value="rejected" onChange={(e) => {setPhotoStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>
                        </div>

                         <div className='row'>
                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Property</h4>
                                    <img src={`${propertyDetails}` } width="200" height="100" alt="propertyDetails" /><br />
                                    <input type="radio" name="propertyStatus" value="verified" onChange={(e) => {setPropertyStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="propertyStatus" value="rejected" onChange={(e) => {setPropertyStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>
                            <div className="card col-3">
                                <div className="card-body">
                                    <h4 className="card-title">Salary Slip</h4>
                                    <img src={`${salarySlip}` } width="200" height="100" alt="salarySlip" /><br />
                                    <input type="radio" name="salaryStatus" value="verified" onChange={(e) => {setSalaryStatus(e.target.value)}} /> <label>Verified</label>&nbsp;
                                    <input type="radio" name="salaryStatus" value="rejected" onChange={(e) => {setSalaryStatus(e.target.value)}} /><label>Rejected</label>
                                </div>
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Verify Documents and Sanction Letter</button>
                                </div>
                            </div>
                        </div>
                    </form> 

                    {/* <img src={`${addressProof}` } width="200" height="100" alt="addressProof" />
                    <img src={`${pancard}` } width="200" height="100" alt="pancard" />
                    <img src={`${adharcard}` } width="200" height="100" alt="adharcard" />
                    <img src={`${itr}` } width="200" height="100" alt="itr" />
                    <img src={`${thumb}` } width="200" height="100" alt="thumb" />
                    <img src={`${signature}` } width="200" height="100" alt="signature" />
                    <img src={`${bankCheque}` } width="200" height="100" alt="bankCheque" />
                    <img src={`${photo}` } width="200" height="100" alt="photo" />
                    <img src={`${propertyDetails}` } width="200" height="100" alt="propertyDetails" />
                    <img src={`${salarySlip}` } width="200" height="100" alt="salarySlip" /> */}
                </div>
            </div>
        </div>
    );
};

export default CmDocVerification;