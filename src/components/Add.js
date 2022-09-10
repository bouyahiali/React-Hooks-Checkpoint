import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Add({ handelAdd }) {
  const [show, setShow] = useState(false);
  const [newmovie, setNewMovie] = useState({
    Genre: {
      Name: "",
    },
    Title: "",
    Description: "",
    ImageURL: "",
    Rating: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => { if (newmovie.Title.length<=0) {alert("Please enter a title"); return} 
    handelAdd(newmovie);
    setNewMovie({
      Genre: {
        Name: "",
      },
      Title: "",
      Description: "",
      ImageURL: "",
      Rating: 0,
    });
    handleClose();
  };

  return (
    <>
      <Button className="mb-3 align-middle " variant="primary" onClick={handleShow}>
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewMovie({ ...newmovie, Title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie Discreption </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewMovie({ ...newmovie, Description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gener</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewMovie({
                    ...newmovie,
                    Genre: { ...newmovie.Genre, Name: e.target.value },
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image src</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewMovie({ ...newmovie, ImageURL: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewMovie({ ...newmovie, Rating: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
