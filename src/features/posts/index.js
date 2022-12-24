import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import PostList from './components/PostList';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Button from 'react-bootstrap/Button';
import EditPost from './components/EditPost';

const Posts = () => {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <h1><Link to='/posts' style={{textDecoration: 'none'}}>Posts</Link></h1>
          <Link to={`/posts/new`}>
            <Button variant="primary">Add New</Button>
          </Link>
        </Row>
        <hr />
        <Routes>
          <Route index element={<PostList />} />
          <Route path=":postId" element={<Post />} />
          <Route path="/new" element={<CreatePost />} />
          <Route path="/:postId/edit" element={<EditPost />} />
        </Routes>
        <Outlet />
      </Container>
    </>
  );
}

export default Posts