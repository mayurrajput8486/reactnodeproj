import ReSidebar from "./ReSidebar";

const ReError = () => {
    return(
        <>
            <ReSidebar />
            <div className="main">
                <h1>An Error Occured</h1>
                <p>Could not found the page</p>         
            </div>
        </>
    );
}

export default ReError;