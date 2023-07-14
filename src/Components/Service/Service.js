import axios from "axios";

const createEnquiry = (enquiryData) => {
    return axios.post('http://localhost:3001/api/createEnquiry', enquiryData);
};

const getAllEnquiry = () => {
    return axios.get('http://localhost:3001/api/getAllEnquiry');
};

const getSingleEnquiry = (enquiryId) => {
    return axios.get('http://localhost:3001/api/getSingleEnquiry/' + enquiryId);
};

const deleteEnquiryById = (enquiryId) => {
    return axios.delete('http://localhost:3001/api/deleteEnquiry/' + enquiryId);
};

const getCibilScore = () => {
    return axios.get('http://localhost:3001/api/getcibilscore');
};

const createCibilScore = (cibilScoreData) => {
    return axios.post('http://localhost:3001/api/createCibilScore', cibilScoreData);
}

const getAllCibilScore = () => {
    return axios.get('http://localhost:3001/api/getAllCibilScore');
};

const updateEnquiry = (enquiryId, enquiryData) => {
    return axios.put('http://localhost:3001/api/updateEnquiry/' + enquiryId, enquiryData);
};

const documentsUpload = (documentData) => {
    return axios.post('http://localhost:3001/api/uploadDocuments', documentData/* , {
        headers:{
        'Content-Type': 'multipart/form-data',
        }
    } */);
};

const createRegistration = (registrationData) => {
    return axios.post('http://localhost:3001/api/createRegistration', registrationData);
};

const getAllRegistrationData = () => {
    return axios.get('http://localhost:3001/api/getAllRegistrationData');
};

const getRegIdByEnquiryId = (enquiryId) => {
    return axios.get('http://localhost:3001/api/getRegIdByEnquiryId/' + enquiryId);
};

const getAllDocuments = () => {
    return axios.get('http://localhost:3001/api/getAllDocuments');
};

const getSingleDocument = (enquiryId) => {
    return axios.get('http://localhost:3001/api/getSingleDocument/' + enquiryId);
};

const createVerifyDocuments = (verifyData) => {
    return axios.post('http://localhost:3001/api/createVerifyDocuments', verifyData);
};


const getSingleRegistrationData = (regId) => {
    return axios.get('http://localhost:3001/api/getSingleRegistrationData/' + regId);
};

const createSanctionLetter = (sanctionData) => {
    return axios.post('http://localhost:3001/api/createSanctionLetter', sanctionData);
};

const getSanctionLetterData = (regId) => {
    return axios.get('http://localhost:3001/api/getSanctionLetterData/' + regId);
};

const getAllSanctionLetterData = () => {
    return axios.get('http://localhost:3001/api/getAllSanctionLetterData');
};

const sendSanctionEmail = (sanctionData) => {
    return axios.post('http://localhost:3001/api/sendSanctionEmail', sanctionData);
};

export { createEnquiry, getAllEnquiry, deleteEnquiryById, getSingleEnquiry, getCibilScore, createCibilScore, getAllCibilScore, updateEnquiry, documentsUpload, createRegistration, getAllRegistrationData, getAllDocuments, getSingleDocument, getRegIdByEnquiryId, createVerifyDocuments, getSingleRegistrationData, createSanctionLetter, getSanctionLetterData, getAllSanctionLetterData, sendSanctionEmail};