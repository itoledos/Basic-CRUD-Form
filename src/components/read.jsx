import React, { useEffect, useState } from 'react';
// import { Button, Table } from 'semantic-ui-react';
// import { Button, TableFooter } from 'semantic-ui-react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Read = () => {
    
    const [APIData, setAPIData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://63461d2439ca915a690d4f96.mockapi.io/api/data/exampleData')
            .then((res)=> {
                setAPIData(res.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
        axios.get('https://63461d2439ca915a690d4f96.mockapi.io/api/data/exampleData')
            .then(()=> {
                navigate('/update')
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63461d2439ca915a690d4f96.mockapi.io/api/data/exampleData/${id}`)
        .then(()=>{
            getData();
        })
    }

    const getData = () => {
        axios.get('https://63461d2439ca915a690d4f96.mockapi.io/api/data/exampleData')
            .then((getData)=> {
                    setAPIData(getData.data)
            })
    }

    return (
        <div>
            <TableContainer component={Paper}>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Checked</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {APIData.map((data,idx)=> {
                        return(
                            <TableRow key={idx}>
                                <TableCell>{data.firstName}</TableCell>
                                <TableCell>{data.lastName}</TableCell>
                                <TableCell>{data.checkbox?'Checked':'Unchecked'}</TableCell>
                                <TableCell>
                                    <Link>
                                        <Button onClick={()=>setData(data)}>Update</Button>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link>
                                        <Button onClick={()=>onDelete(data.id)}>Delete</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )

                    })}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                    <TableCell>
                    <Button onClick={() => navigate('/')} >Go Back</Button>
                    </TableCell>
                    </TableRow>
                </TableFooter> */}
            </Table>
            </TableContainer>
        </div>
    )
}

export default Read;