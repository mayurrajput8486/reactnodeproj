import AhSidebar from "./AhSidebar";

const AhError = () => {
    return(
        <>
            <AhSidebar />
            <div className="main">
                <h1>An Error Occured</h1>
                <p>Could not found the page</p>         
            </div>
        </>
    );
}

export default AhError;