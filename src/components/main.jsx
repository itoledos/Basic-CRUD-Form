import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Main = () => {
    return(
        <React.Fragment>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>
                        <Link to={'/create'} style={{fontSize: '3em', color: '#141d42'}} >Create</Link>
                    </Button>
                    <Button>
                        <Link to={'/read'} style={{fontSize: '3em', color: '#141d42'}} >List of entries</Link>
                    </Button>
                </ButtonGroup>

            </div>

        </React.Fragment>
    )
}

export default Main;