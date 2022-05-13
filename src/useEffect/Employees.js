import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "react-bootstrap";

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getEmployees = async function fetchData() {
            const {data} = await axios.get('http://localhost:3000/employees');
            setEmployees(data);
        };

        getEmployees().then();

        return () => {
            source.cancel("Canceled employees request");
        };
    }, []);

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {employees.map((post, index) => {
                return <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.first_name}</td>
                    <td>{post.last_name}</td>
                    <td>{post.email}</td>
                </tr>
            })}
            </tbody>
        </Table>

    </>
};

export default Employees;