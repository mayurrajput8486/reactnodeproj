import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { documentsUpload } from "../../Service/Service";

const UploadDocuments = () => {
    const [pancard, setPancard] = useState('');
    const [adharcard, setAdharcard] = useState('');
    const [addressProof, setAddressProof] = useState('');
    const [itr, setItr] = useState('');
    const [photo, setPhoto] = useState('');
    const [signature, setSignature] = useState('');
    const [thumb, setThumb] = useState('');
    const [bankCheque, setBankCheque] = useState('');
    const [propertyDetails, setPropertyDetails] = useState('');
    const [salarySlip, setSalarySlip] = useState('');

    const {enquiryId} = useParams();

    const uploadDocumentsHandler = (e) => {
        e.preventDefault();
        const uploadData = {pancard, adharcard, addressProof, itr, photo, signature, thumb, bankCheque, propertyDetails, salarySlip};
        console.log(uploadData);

        documentsUpload(uploadData).then((res) => {
            alert('Documents Uploaded Successfully!');
            Navigate('/re/enquirylist');
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="main">
            <div className="row">
                <div className="offset-lg-2 col-lg-8">
                    <div className="container mt-4">
                        <form className="container" onSubmit={uploadDocumentsHandler} >
                            <div className="card">
                                <div className="card-header text-center">
                                    <h2>Upload Documents</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="enquiryId" className="col-form-label">Enquiry Id:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="text" disabled name="enquiryId" value={enquiryId} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="pancard" className="col-form-label">Pancard:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="pancard" className="form-control" onChange={(e) => {setPancard(e.target.value)}} value={pancard} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="adharcard" className="col-form-label">Adhar Card:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="adharcard" className="form-control" onChange={(e) => {setAdharcard(e.target.value)}} value={adharcard} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="addressProof" className="col-form-label">Address Proof:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="addressProof" className="form-control" onChange={(e) => {setAddressProof(e.target.value)}} value={addressProof} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="itr" className="col-form-label">ITR:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="itr" className="form-control" onChange={(e) => {setItr(e.target.value)}} value={itr} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="photo" className="col-form-label">Photo:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="photo" className="form-control" onChange={(e) => {setPhoto(e.target.value)}} value={photo} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="signature" className="col-form-label">Signature:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="signature" className="form-control" onChange={(e) => {setSignature(e.target.value)}} value={signature} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="thumb" className="col-form-label">Thumb:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="signature" className="form-control" onChange={(e) => {setThumb(e.target.value)}} value={signature} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="bankCheque" className="col-form-label">Bank Cheque:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="bankCheque" className="form-control" onChange={(e) => {setBankCheque(e.target.value)}} value={bankCheque} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="propertyDetails" className="col-form-label">Property Details:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="propertyDetails" className="form-control" onChange={(e) => {setPropertyDetails(e.target.value)}} value={propertyDetails} required />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-3">
                                            <label htmlFor="salarySlip" className="col-form-label">Salary Slip:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="file" name="salarySlip" className="form-control" onChange={(e) => {setSalarySlip(e.target.value)}} value={salarySlip} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Upload</button>
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
};

export default UploadDocuments;