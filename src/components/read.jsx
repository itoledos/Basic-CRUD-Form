import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


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
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data,idx)=> {
                        return(
                            <Table.Row key={idx}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox?'Checked':'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                    <Link>
                                        <Button onClick={()=>setData(data)}>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link>
                                        <Button onClick={()=>onDelete(data.id)}>Delete</Button>
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )

                    })}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.Cell>
                            <Link to={'/'} style={{marginLeft: '25px', color: 'blue'}}>Return to main</Link>
                        </Table.Cell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

export default Read;