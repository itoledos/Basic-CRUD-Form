import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return(
        <React.Fragment>
            <Link to={'/create'} style={{fontSize: '2em', color: 'red'}} >Create</Link>
        </React.Fragment>
    )
}

export default Main;