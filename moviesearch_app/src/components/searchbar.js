import React, { useRef } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getSearchData } from "../action";

const SearchBar = ({ getSearchData }) => {
  // const { getMovieData } = props
  const searchRef = useRef();

  const searchMovieOnClick = () => {
    getSearchData(searchRef.current.value);
  };

  // const searchMovieCategoryOnClick = (e) =>{
  //     props.getMovieData(e.target.value);
  //     console.log(e.target.value);
  // }

  // some smal changes

  return (
    <Container className="mt-4">
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button onClick={searchMovieOnClick} variant="outline-secondary">
              Search
            </Button>
          </InputGroup.Prepend>
          <FormControl ref={searchRef} aria-describedby="basic-addon1" />
        </InputGroup>

        {/* <select
            onClick={searchMovieCategoryOnClick}
          >
            <option value="action">Action</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
          </select> */}

        {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu ref={searchRef}>
              <Dropdown.Item onClick={searchMovieCategoryOnClick}>
                Action
              </Dropdown.Item>
              <Dropdown.Item>Thrillers</Dropdown.Item>
              <Dropdown.Item>Romance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
      </Row>
    </Container>
  );
};

export default connect(null, { getSearchData })(SearchBar);
