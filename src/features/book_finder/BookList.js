import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useGetBooksQuery } from '../../services/bookSlice';


const BookList = ({ searchTerm }) => {
  const { data: books, isLoading, isSuccess, isError, error } = useGetBooksQuery(searchTerm)

  if(isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <strong>Loading...</strong>
        <div className="spinner-border" role="status" aria-hidden="true"></div>
      </div>
    )
  }

  if(isError) {
    return <div>{error.toString()}</div>
  }

  if(isSuccess) {
    const { items } = books

    return (
      <>
        {items.map(({ id, volumeInfo }) => (
          <Col key={id}>
            <Card className='h-100'>
              <Card.Img
                variant="top"
                src={volumeInfo?.imageLinks?.smallThumbnail}
                alt={volumeInfo.title}
                style={{ width: '100%', height: '15rem' }}
              />
              <Card.Body>
                <Card.Title>{volumeInfo.title}</Card.Title>
                <Card.Text>
                  {volumeInfo.subtitle}
                </Card.Text>
                <Card.Text>
                  <strong>Authors:</strong>{' '}<small>{volumeInfo.authors.join(',')}</small>
                </Card.Text>
                <Card.Text>
                  <strong>Publisher:</strong>{' '}<small>{volumeInfo.publisher}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

export default BookList