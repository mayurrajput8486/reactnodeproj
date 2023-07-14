import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { documentsUpload } from "../../Service/Service";
import { useState } from "react";
// import { NavLink } from "react-router-dom";

export const UploadData=()=> {

  const [postImage, setPostImage] = useState({
    myFile: "",
  });

  const { enquiryId } = useParams();
  const navigate = useNavigate();
  //console.log('enquiryId = ',enquiryId);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const getRegisterData = async (e) => {
    //console.log('e = ', e.addressProof[0]);

    //const file = e.addressProof[0];
    const addressProof = await convertToBase64(e.addressProof[0]);
    //console.log('addressProof = ', addressProof);
    const pancard = await convertToBase64(e.pancard[0]);
    const adharcard = await convertToBase64(e.adharcard[0]);
    const itr = await convertToBase64(e.itr[0]);
    const thumb = await convertToBase64(e.thumb[0]);
    const signature = await convertToBase64(e.signature[0]);
    const bankCheque = await convertToBase64(e.bankCheque[0]);
    const photo = await convertToBase64(e.photo[0]);
    const propertyDetails = await convertToBase64(e.propertyDetails[0]);
    const salarySlip = await convertToBase64(e.salarySlip[0]);

    const documentsData = {addressProof, pancard, adharcard, itr, thumb, signature, bankCheque, photo, propertyDetails, salarySlip, enquiryId};
    console.log('documentsData = ', documentsData);
    console.log('addressProof = ', addressProof);
    
    documentsUpload(documentsData).then((res) => {
      alert('Documents Uploaded Successfully!');
        navigate('/re/enquirylist');
    }).catch((err) => {
        console.log(err);
    });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  };

  const convert = (e) => {
    console.log(e.target.files[0]);
    // check max. file size is not exceeded
    // size is in bytes
    /* if (files[0].size > 2000000) {
      console.log("File too large");
      return;
    } */
    /* var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      console.log(reader.result); //base64encoded string
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    }; */
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
    {/* <input
          type="file" 
          label="Image" 
          name="myFile" 
          accept="image/*" 
          onClick={(e) => handleFileUpload(e)}
        /> */}
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