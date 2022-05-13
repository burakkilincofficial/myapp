import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "react-bootstrap";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getPosts = async function fetchData() {
            const {data} = await axios.get('http://localhost:3000/posts');
            setPosts(data);
        };

        getPosts().then();

        return () => {
            source.cancel("Canceled posts request");
        };
    }, []);

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post, index) => {
                return <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                </tr>
            })}
            </tbody>
        </Table>

    </>
}
export default Posts;