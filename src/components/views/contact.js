import {useEffect} from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";


const Contact=() =>{
    const history = useHistory();

    const location = useLocation();

    const params = useParams();

    return(
        <>
        <h1>Contact</h1>
        <h3> Category: {params?.category}/{params.subcategory}</h3>
        <button className="btn btn-primary"
        onClick={()=> history.goBack()}>
        Go somewhere</button>
        </>
    )
}