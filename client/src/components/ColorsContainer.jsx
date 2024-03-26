import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { getColores,postColor,deleteColor } from '../helpers/queries.js';
import  ColorForm from './ColorForm.jsx'
import ColorList from './ColorList.jsx'
import '../css/colorContainer.css'

export const ColorsContainer = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    obtenerColores();
  }, []);

  const obtenerColores = async () => {
    const data = await getColores();
    setColors(data);
  }

  const handleSaveColor = async (newColor) => {
    const nuevoColor = {
      color: newColor,
    };
    const data = await postColor(nuevoColor);
    alert('Color guardado' );
    obtenerColores();
  };

  const borrarColor = async (id) => {
    const data = await deleteColor(id);
    alert('Color eliminado' );
    obtenerColores();
  }

  return (
    <Container className='ColorContainer'>
      <Row className='container-fluid'>
        <Col md={6} lg={12}>
          <h1>Administrar Colores</h1>
          <ColorForm onSaveColor={handleSaveColor} setColors={setColors} />
        </Col>
        <Col md={6} lg={12}>
          <h2>Colores Guardados</h2>
          <ColorList colors={colors} borrarColor={borrarColor} obtenerColores={obtenerColores} />
        </Col>
      </Row>
    </Container>
  );
};
