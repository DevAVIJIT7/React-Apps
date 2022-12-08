import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from './SearchBar';
import BookList from './BookList';

const BookFinder = () => {
  const [searchTerm, setSearchTerm] = useState('React');

  return (
    <>
      <Container>
        <Row className='mt-5'>
          <h1>Book Finder</h1>
          <SearchBar {...{searchTerm, setSearchTerm}}/>
        </Row>
        <Row xs={2} md={4} className='g-5 mt-3'>
          <BookList {...{searchTerm}} />
        </Row>
      </Container>
    </>
  );
}

export default BookFinder