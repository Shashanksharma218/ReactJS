import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
    <div style={{padding: "0px 30px"}}>
        <h1>🚫Something went wrong...</h1>
        <h1>{err.status + ": " + err.statusText}</h1>
    </div>
    );
};

export default Error;