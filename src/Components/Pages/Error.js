import Navbar from "../Header/Navbar";

const ErrorPage = () => {
    return(
        <>
            <Navbar />
            <main>
                <h1>An Error Occured</h1>
                <p>Could not found the page</p>
            </main>
        </>
    );
}

export default ErrorPage;