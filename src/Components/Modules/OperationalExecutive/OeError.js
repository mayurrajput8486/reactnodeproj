import OeSidebar from "./OeSidebar";

const OeError = () => {
    return(
        <>
            <OeSidebar />
            <div className="main">
                <h1>An Error Occured</h1>
                <p>Could not found the page</p>         
            </div>
        </>
    );
}

export default OeError;