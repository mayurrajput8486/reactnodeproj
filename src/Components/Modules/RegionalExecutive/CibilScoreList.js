import { useEffect, useState } from "react";
import { getAllCibilScore } from "../../Service/Service";
/* import { parseISO, format  } from 'date-fns'; */

const CibilScoreList = () => {
    const [cibilData, setCibilData] = useState(null);

    useEffect(() => {
        getAllCibilScore().then((response) => {
            console.log(response.data.response);
            setCibilData(response.data.response);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="main">
            <div className="container">
                <div className='table-responsive'>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Cibil Id</td>
                                <td>Cibil Score</td>
                                <td>Cibil Time</td>
                                <td>Status</td>
                                <td>Remark</td>
                                <td>Enquiry Id</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cibilData && cibilData.map(cibil => (
                                <tr key={cibil.cibilId}>
                                    <td>{cibil.cibilId}</td>
                                    <td>{cibil.cibilScore}</td>
                                    <td>{new Date(cibil.cibilScoreTime).toLocaleString() }</td>
                                    <td>{cibil.cibilStatus}</td>
                                    <td>{cibil.cibilRemark}</td>
                                    <td>{cibil.enquiryId}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CibilScoreList;