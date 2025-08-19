import { useContext } from "react";
import userContext from "../utils/UserContext";

const Contact = ()=>{
    const {loggedInUser} = useContext(userContext);
    return (
       <div style={{padding: "0px 30px"}}>
           <h1>Contact {loggedInUser} at: support@feasto.com</h1>
       </div>
   )
}

export default Contact;