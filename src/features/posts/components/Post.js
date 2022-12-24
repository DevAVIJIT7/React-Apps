import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDeletePostMutation, useGetPostQuery } from '../../../services/postSlice';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const {
    data: post,
    isError,
    isLoading,
    isSuccess,
  } = useGetPostQuery(postId)
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()


  if(isError) {
    return <>Unable to find post</>
  }

  if(isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <strong>Loading...</strong>
        <div className="spinner-border" role="status" aria-hidden="true"></div>
      </div>
    )
  }

  if(isSuccess && post) {
    const {id, title, body} = post;
    return (
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {body}
          </Card.Text>
          <div className='d-flex justify-content-around'>
            <Link to={`/posts/${id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              variant="danger"
              onClick={() => deletePost(id).then(() => navigate('/posts'))}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Post;