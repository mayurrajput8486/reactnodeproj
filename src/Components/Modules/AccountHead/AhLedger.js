import { useEffect, useState } from "react";
import { getAllSanctionLetterData } from '../../Service/Service';
import { useNavigate } from "react-router-dom";

const Ledger = () => {
    const [sanctionData, setSanctionData] = useState(null);

    useEffect(() => {
        getAllSanctionLetterData().then((response) => {
            console.log(response);
            setSanctionData(response.data.response);
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
                                <td>Ledger Id</td>
                                <td>Customer Id</td>
                                <td>Customer Name</td>
                                <td>Customer Address</td>
                                <td>Loan Amount</td>
                                <td>Tenure of Loan</td>
                                <td>Annual Interest Rate</td>
                                <td>EMI Amount</td>
                                <td>Loan Amount Payable</td>
                            </tr>
                        </thead>
                        <tbody>
                            {sanctionData && sanctionData.map(ledger => (
                                <tr key={ledger.sanctionId}>
                                    <td>{ledger.sanctionId}</td>
                                    <td>{ledger.regId}</td>
                                    <td>{ledger.name}</td>
                                    <td>{ledger.propertyAddress}</td>
                                    <td>{ledger.loanAmtSanctioned}</td>
                                    <td>{ledger.loanTenure}</td>
                                    <td>{ledger.interestRate}</td>
                                    <td>{ledger.emi}</td>
                                    <td>{ledger.payableAmt}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Ledger;