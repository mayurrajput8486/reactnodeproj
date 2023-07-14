import CmSidebar from "./CmSidebar";

const CmError = () => {
    return(
        <>
            <CmSidebar />
            <div className="main">
                <h1>An Error Occured</h1>
                <p>Could not found the page</p>         
            </div>
        </>
    );
}

export default CmError;