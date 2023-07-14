import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/Pages/Error';
import Home from './Components/Pages/Home';
import RootLayout from './Components/Pages/Root';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import Gallery from './Components/Pages/Gallery';
import Login from './Components/Pages/Login';
import ReRoot from './Components/Modules/RegionalExecutive/ReRoot';
import ReError from './Components/Modules/RegionalExecutive/ReError';
import EnquiryList from './Components/Modules/RegionalExecutive/EnquiryList';
import EnquiryCreate from './Components/Modules/RegionalExecutive/EnquiryCreate';
import CibilScore from './Components/Modules/OperationalExecutive/CibilScore';
import Logout from './Components/Pages/Logout';
import CmRoot from './Components/Modules/CreditManager/CmRoot';
import CmError from './Components/Modules/CreditManager/CmError';
import CmDocument from './Components/Modules/CreditManager/CmDocument';
import OeRoot from './Components/Modules/OperationalExecutive/OeRoot';
import OeError from './Components/Modules/OperationalExecutive/OeError';
import OeEnquiryList from './Components/Modules/OperationalExecutive/OeEnquiryList';
import OeRegistration from './Components/Modules/OperationalExecutive/OeRegistration';
import AhRoot from './Components/Modules/AccountHead/AhRoot';
import AhError from './Components/Modules/AccountHead/AhError';
import AhLoanDisburst from './Components/Modules/AccountHead/AhLoanDisburst';
import EnquiryEdit from './Components/Modules/RegionalExecutive/EnquiryEdit';
import CibilScoreList from './Components/Modules/RegionalExecutive/CibilScoreList';
import UploadDocuments from './Components/Modules/RegionalExecutive/UploadDocuments';
import ReRegistration from './Components/Modules/RegionalExecutive/ReRegistration';
import CmRegistrationList from './Components/Modules/CreditManager/CmRegistrationList';
import CmDocVerification from './Components/Modules/CreditManager/CmDocVerification';
import CmSanctionLetter from './Components/Modules/CreditManager/CmSanctionLetter';
import GenericPdfDownloader from './Components/PDF/Pdf';
import ReSanctionLetter from './Components/Modules/RegionalExecutive/ReSanctionLetter';
import Ledger from './Components/Modules/AccountHead/AhLedger';
//import PdfComponent from './Components/PDF/PdfComponent';

const router = createBrowserRouter([
{
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/contactus', element: <ContactUs /> },
    { path: '/gallery', element: <Gallery /> },
    { path: '/pdf', element: <GenericPdfDownloader downloadFileName="CustomPdf" rootElementId="testId" /> },    
    { path: '/login', element:<Login /> }
  ]
},
/* RE */
{
  path: '/',
  element: <ReRoot />,
  errorElement: <ReError />,
  children: [
    /* { path: '/re', element: <RegionalExecutive /> }, */
    { path: '/re/enquirycreate', element: <EnquiryCreate /> },
    { path: '/re/enquirylist', element: <EnquiryList /> },
    { path: '/re/enquiry/edit/:enquiryId', element: <EnquiryEdit /> },
    { path: '/re/cibilscorelist', element: <CibilScoreList /> },
    { path: '/re/registration/:enquiryId', element: <ReRegistration /> },
    { path: '/re/sanctionletter', element: <ReSanctionLetter /> },
    { path: '/re/uploaddocuments/:id', element: <UploadDocuments /> },
    
    { path: '/re/registration/:enquiryId', element: <ReRegistration /> },
    { path: '/logout', element: <Logout /> }
  ]
},
/* CM */
{
  path: '/',
  element: <CmRoot />,
  errorElement: <CmError />,
  children: [
    /* { path: '/cm', element: <CreditManager /> }, */
    { path: '/cm/document', element: <CmDocument /> },
    { path: '/cm/customerlist' , element: <CmRegistrationList />},
    { path: '/cm/docVerification/:enquiryId' , element: <CmDocVerification />},
    { path: '/cm/sanctionletter/:regId' , element: <CmSanctionLetter />},
    { path: '/logout', element: <Logout /> }
  ]
},
/* OE */
{
  path: '/',
  element: <OeRoot />,
  errorElement: <OeError />,
  children: [
    /* { path: '/oe', element: <OperationalExecutive /> }, */
    { path: '/oe/oeenquirylist', element: <OeEnquiryList /> },
    { path: '/oe/registration', element: <OeRegistration /> },
    { path: '/oe/oeenquirylist/cibilscore/:enquiryId', element: <CibilScore /> },
    { path: '/logout', element: <Logout /> }
  ]
},
/* AH */
{
  path: '/',
  element: <AhRoot />,
  errorElement: <AhError />,
  children: [
    { path: '/ah/ledger', element: <Ledger /> },
    { path: '/ah/loandisburst', element: <AhLoanDisburst /> },
    { path: '/logout', element: <Logout /> }
  ]
}
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
