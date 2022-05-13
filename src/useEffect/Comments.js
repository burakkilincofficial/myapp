import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "react-bootstrap";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getComments = async function fetchData() {
            const {data} = await axios.get('http://localhost:3000/comments');
            setComments(data);
        };

        getComments().then();

        return () => {
            source.cancel("Canceled comments request");
        };
    }, []);

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Body</th>
                <th>Post Id</th>
            </tr>
            </thead>
            <tbody>
            {comments.map((post, index) => {
                return <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.body}</td>
                    <td>{post.postId}</td>
                </tr>
            })}
            </tbody>
        </Table>

    </>
};

export default Comments;