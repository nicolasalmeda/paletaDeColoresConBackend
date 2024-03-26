import React from 'react';
import { useState } from 'react';
import {Button, ListGroup, Row, Modal, Form } from 'react-bootstrap';
import { updateColor } from '../helpers/queries';


const ColorList = ({ colors,borrarColor, obtenerColores }) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState({});

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditClick = (color) => {
    setSelectedColor(color);
    setShowModal(true);
  };

  const handleSaveChanges = async () => {
    try {
      await updateColor(selectedColor._id, selectedColor);
      obtenerColores();
      setShowModal(false);

    } catch (error) {
      console.error('Error al actualizar el color:', error);
    }
  };

  return (
    <>
    <ListGroup>
      {colors.map((color) => (
        <Row key={color._id}>
        <ListGroup.Item  className='w-75 mx-auto my-2' style={{ backgroundColor: color.color }}>
          <p>Nombre: {color.nombre} - {color.color}</p>
        </ListGroup.Item>
        <Button variant="primary" className='w-auto mx-auto my-2 ms-2' onClick={() => handleEditClick(color)}>Editar</Button>
          <Button variant="danger" className='w-auto mx-auto my-2 ms-2' onClick={() => borrarColor(color._id)}>Borrar</Button>
        </Row>
      ))}
    </ListGroup>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editColorInput">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: #ffffff"
                value={selectedColor.color || ''}
                onChange={(e) => setSelectedColor({ ...selectedColor, color: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="editNombreInput">
              <Form.Label>Nombre del Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Rojo"
                value={selectedColor.nombre || ''}
                onChange={(e) => setSelectedColor({ ...selectedColor, nombre: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleSaveChanges}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
  </>
  );
};

export default ColorList;