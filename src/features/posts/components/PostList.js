import React from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useGetPostsQuery } from '../../../services/postSlice';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PostList = () => {
  const {
    data: posts,
    isFetching,
    isLoading,
  } = useGetPostsQuery()

  if(isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <strong>Loading...</strong>
        <div className="spinner-border" role="status" aria-hidden="true"></div>
      </div>
    )
  }

  return (
    <Row xs={2} md={3} className="g-4" style={isFetching ? { opacity: '0.4' } : {}}>
      {posts.map(({ id, title, body }) => (
        <Col key={id}>
          <Card>
            <Card.Body>
              <Link to={`/posts/${id}`}><Card.Title>{title}</Card.Title></Link>
              <Card.Text>
                {body}
              </Card.Text>
              <Link to={`/posts/${id}/edit`}>
                <Button variant="primary">Edit</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
    </Row>
  );
}

export default PostList;