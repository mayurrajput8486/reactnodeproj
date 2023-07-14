import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCibilScore, getCibilScore } from "../../Service/Service";


const CibilScore = () => {
    const navigate = useNavigate();
    const {enquiryId} = useParams();
    //console.log(enquiryId);

    const [cibilScore, setCibilScore] = useState('');
    const [cibilScoreTime, setCibilScoreTime] = useState('');
    const [cibilStatus, setCibilStatus] = useState('');
    const [cibilRemark, setCibilRemark] = useState('');
    //const [enquiryId, setenquiryId] = useState('');   
    
    const cibilScoreHandler = (event) => {
        event.preventDefault();
        const cibilScoreData = {cibilScore, cibilScoreTime, cibilStatus, cibilRemark, enquiryId};
        console.log(cibilScoreData);

        createCibilScore(cibilScoreData).then((res) => {
            alert('Cibil Score Added Successfully!');
            navigate('/oe/oeenquirylist');
        }).catch((err) => {
            console.log(err);
        });       
    };

    const generateCibilScore = (enquiryId) => {
            getCibilScore().then((response) => {
            //alert('Enquiry Deleted Successfully!');                
            /* getAllEnquiry().then((response) => {
                setEnquiryData(response.data.response); */
                setCibilScore(response.data.cibilScore);
                setCibilScoreTime(response.data.cibilTime);
                 console.log(response.data.cibilTime);
                /*console.log(response.data.cibilScore);
                console.log(response.data.cibilTime); */
            }).catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className="main">
            <div className="row">
                <div className="offset-lg-2 col-lg-8">
                    <div className="container mt-4">
                        <form className="container" onSubmit={cibilScoreHandler} >
                            <div className="card">
                                <div className="card-header text-center">
                                    <h2>Generate Cibil Score</h2>
                                </div>         
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                {/* <label htmlFor="Cibilscore">Cibil Score </label> */}
                                                <button type="button" className="btn btn-primary" onClick={() => { generateCibilScore(enquiryId) }}>Generate Cibil Score</button>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text"  className="form-control" id="cibilScore" name="cibilScore" autoComplete="off" value={cibilScore} onChange={(e) => {setCibilScore(e.target.value)}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="cibilScoreTime">Cibil Score Time </label>
                                                <input type="datetime-local"  className="form-control" id="cibilScoreTime" name="cibilScoreTime" onChange={(e) => {setCibilScoreTime(e.target.value)}} value={cibilScoreTime}  autoComplete="off" />
                                            </div>
                                        </div>                                  
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="cibilStatus">Status</label>
                                                <select className="form-select" id="cibilStatus" name="cibilStatus" onChange={(e) => {setCibilStatus(e.target.value)}}>
                                                    <option>Select Status</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="cibilRemark">Remark</label>
                                                <select className="form-select" onChange={(e) => {setCibilRemark(e.target.value)}} id="cibilRemark" name="cibilRemark">
                                                    <option>Select Status</option>
                                                    <option value="Applicable">Applicable</option>
                                                    <option value="Not applicable">Not Applicable</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="id">Enquiry Id </label>
                                                <input type="id" className="form-control" id="enquiryId" name="enquiryId" autoComplete="off" disabled value={enquiryId} />
                                            </div>
                                        </div>
                                        
                                    </div>                
                                </div>
                                <div className="card-footer">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            {/* <button type="submit" className="btn btn-primary">Back</button> */}
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
export default CibilScore;