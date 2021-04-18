
import React, { useState } from "react";
import { Card, Container, Row, Col, Modal, Button, Image } from "react-bootstrap";

import { connect } from "react-redux";
import { addToFavorite } from "../action";
import * as BsIcons from "react-icons/bs";

const SearchGallery = (props) => {

  const addBtnFav = (elm) => {
    props.addToFavorite(elm);
    console.log("this is add fav" + elm);
  };


  const [preview, setPreview] = useState({ show: false, moviePreview: '', title: '', type: '', year: '' });

  const handleClose = () => setPreview({ show: false, moviePreview: '', title: '', type: '', year: '' });

  const previewShow = (poster, title, type, year) => {
    setPreview({ show: true, moviePreview: poster, title: title, type: type, year: year })

  }


  switch (props.data.status) {
    case "START":
      return <h1>LOADING...</h1>;
    case "FAILED":
      return <h1>FAILED</h1>;
    case "SUCCESS":
      return (
        <Container>
          <Row>
            {props.data.data.map((elm, idx) => (
              <Col key={idx} className="p-3" lg="3" md="3" sm="1">
                <Card className="cardBorder" style={{ width: "15rem" }}>
                  <Card.Img

                    onClick={() =>
                      previewShow(elm.Poster, elm.Title, elm.Type, elm.Year)
                    }

                    onClick={() => previewShow(elm.Poster, elm.Title, elm.Type, elm.Year)}

                    className="objectfit"
                    variant="top"
                    src={elm.Poster}
                    height="300"
                  />
                  <Card.Body className="cardBodyColor">
                    <Card.Title className="text-center cardTitleHeight">
                      <h6>{elm.Title}</h6>
                    </Card.Title>
                    {!props.favList.some((e) => e.imdbID === elm.imdbID) ? (
                      <BsIcons.BsFillStarFill
                        className="fav-icon"
                        onClick={() => {
                          addBtnFav(elm);
                        }}
                      />
                    ) : (
                      <BsIcons.BsBookmarkCheck className="bookmark-icon" />
                    )}

                    {/* <Card.Text className="text-center">{elm.Type}</Card.Text> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Modal show={preview.show} onHide={handleClose}>
            <Modal.Header
              style={{ backgroundColor: "#030617" }}
              className="cardBorder"
            >
              <Image className="modalImg" fluid src={preview.moviePreview} />
            </Modal.Header>
            <Modal.Body className="cardBodyColor cardBorder">
              <Modal.Title>{preview.title}</Modal.Title>
              <p>{`Type: ${preview.type}`}</p>
              <p>{`Year: ${preview.year}`}</p>
            </Modal.Body>
              
            <Modal.Footer className="cardBodyColor cardBorder">
              <Button
                className="cardBodyColor modalFooter"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      );
    default:
      return null;
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.results,
    favList: state.favoriteResults,
  };
};

export default connect(mapStateToProps, { addToFavorite })(SearchGallery);
