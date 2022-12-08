import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const searchBar = useRef()

  return (
    <>
      <InputGroup className="mb-3 pt-3">
        <Form.Control
          placeholder={searchTerm}
          aria-label="Search"
          aria-describedby="search"
          ref={searchBar}
        />
      <Button variant="outline-primary" id="search" onClick={() => setSearchTerm(searchBar.current.value)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
      </InputGroup>
    </>
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
}

export default SearchBar