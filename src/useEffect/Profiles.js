import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "react-bootstrap";

const Profiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getProfiles = async function fetchData() {
            const {data} = await axios.get('http://localhost:3000/profiles');
            setProfiles(data);
        };

        getProfiles().then();

        return () => {
            source.cancel("Canceled profiles request");
        };
    }, []);

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {profiles.map((post, index) => {
                return <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                </tr>
            })}
            </tbody>
        </Table>

    </>
};

export default Profiles;