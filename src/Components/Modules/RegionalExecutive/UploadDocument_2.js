import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { documentsUpload } from "../../Service/Service";
// import { NavLink } from "react-router-dom";

export const UploadData=()=> {

  const { enquiryId } = useParams();
  const navigate = useNavigate();
  //console.log('enquiryId = ',enquiryId);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const getRegisterData = async(UserObj) => { 
    //console.log('UserObj 1 = ',UserObj);
    UserObj.pancard=UserObj.pancard[0];
    UserObj.addressProof = UserObj.addressProof[0];
    UserObj.itr = UserObj.itr[0];
    UserObj.adharcard = UserObj.adharcard[0];
    UserObj.thumb = UserObj.thumb[0];
    UserObj.signature = UserObj.signature[0];
    UserObj.bankCheque = UserObj.bankCheque[0];
    UserObj.photo = UserObj.photo[0];
    UserObj.propertyDetails = UserObj.propertyDetails[0];
    UserObj.salarySlip = UserObj.salarySlip[0];
    UserObj.enquiryId = enquiryId;
    //console.log('UserObj 2 = ',UserObj);

    documentsUpload(UserObj).then((res) => {
      alert('Documents Uploaded Successfully!');
        navigate('/re/enquirylist');
    }).catch((err) => {
        console.log(err);
    });
  }
  
  return (<>
     <div className='container col-6 mt-5 bg-light p-5'>
      <form onSubmit={handleSubmit(getRegisterData)} encType="multipart/form-data">
      <div className='mt-5 mb-5 ms-5 text-success'>
        <h1>Upload Documents</h1>
      </div>
       <div className="mb-3 row">
    <label htmlFor="inputcust Id" className="col-sm-4 col-form-label ">Custemer Id:</label>
    <div className="col-sm-8 ">
      <input type="number" disabled className="form-control" {...register('enquiryId')} value={enquiryId}  />
    </div>
  </div> 
  <div className="mb-3 row">
    <label htmlFor="Pancard" className="col-sm-4 col-form-label">PanCard:</label>
    <div className="col-sm-8 ">
    <input className="form-control "  type="file" {...register('pancard',{  required:"this field is required" })} />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Address Proof" className="col-sm-4 col-form-label">Address Proof:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('addressProof',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="ITR" className="col-sm-4 col-form-label">ITR:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('itr',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Adhaarcard" className="col-sm-4 col-form-label">AdhaarCard:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('adharcard',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Photo" className="col-sm-4 col-form-label">Photo:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('photo',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Signature" className="col-sm-4 col-form-label">Signature:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('signature',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Thumb" className="col-sm-4 col-form-label">Thumb:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('thumb',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="blankcheck" className="col-sm-4 col-form-label">Blankcheck:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('bankCheque',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Property details" className="col-sm-4 col-form-label">Property-Details:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('propertyDetails',{  required:"this field is required" })}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="salaryslip" className="col-sm-4 col-form-label">SalarySlip:</label>
    <div className="col-sm-8">
    <input className="form-control" type="file" {...register('salarySlip',{  required:"this field is required" })}/>
    </div>
  </div>  

    
   <div className="mb-3 row ms-5">
    
    <button type="submit" className="btn btn-success col-3 ms-5 mt-2">Submit</button>
    {/* <NavLink to={`/cmpage/docupload`}><button type='button'  className='btn btn-outline-success'>Submit</button> </NavLink> */}
  </div>
  </form>

    </div>  
    </>);
}


export default UploadData;