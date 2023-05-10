import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return(
        <React.Fragment>
            <Link to={'/create'} style={{fontSize: '3em', color: '#a88532'}} >Create</Link>
        </React.Fragment>
    )
}

export default Main;