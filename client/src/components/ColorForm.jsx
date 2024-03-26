import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { getColor } from '../helpers/queries';

const ColorForm = ({ onSaveColor,setColors }) => {
  const [colorAdd, setColorAdd] = useState({
    color: '',
    nombre: ''
  });
  const [nombreSearch,setNombreSearch] = useState('');

  const handleColorChange = (event) => {
    setColorAdd({
      ...colorAdd,
      [event.target.name]: event.target.value.toLowerCase(),
    });
  };

  const handleNombreSearch = (e) => {
    setNombreSearch(e.target.value.toLowerCase())
  }

  const handleSaveColor = () => {
    const { color, nombre } = colorAdd;
    console.log({color, nombre});
    if (color.trim() !== '' && color.trim().startsWith('#') && (color.trim().length === 4 || color.trim().length === 7)) {
      onSaveColor({ color, nombre });
      setColorAdd({
        color: '',
        nombre: ''
      });
    } else {
      alert('El color debe comenzar con "#" y tener la longitud mínima para un valor RGB.');
    }
  };

  const handleSearch = async () => {
    if (nombreSearch.trim().length < 2) {
      alert('El nombre debe tener al menos 2 caracteres.');
      return;
    }
  const colorSearch = await getColor(nombreSearch);
  setColors([colorSearch]);
    setNombreSearch('');
  }

  return (
    <Form>
      <Form.Group controlId="colorInput" className='display-flex flex-direction-column'>
        <Form.Label className='my-2'>Buscar por color:</Form.Label>
        <Container>
        <Form.Control
          className='my-2 w-75 mx-auto'
          type="text"
          placeholder="Ej: amarillo"
          name="colorSearch"
          value={nombreSearch}
          onChange={handleNombreSearch}
          
        />
        <Button className='my-2' variant="primary" onClick={handleSearch}>Buscar</Button>

        </Container>
        <Form.Label className='my-2'>Ingrese un color:</Form.Label>
        <Form.Control
          className='my-2 w-75 mx-auto'
          type="text"
          placeholder="Ej: #ffffff"
          name="color"
          value={colorAdd.color}
          onChange={handleColorChange}
        />
      </Form.Group>
      <Form.Group controlId="nombreInput">
        <Form.Label className='my-2'>Nombre del color:</Form.Label>
        <Form.Control
          className='my-2 w-75 mx-auto'
          type="text"
          placeholder="Ej: Amarillo Carmesí"
          name='nombre'
          value={colorAdd.nombre}
          onChange={handleColorChange}
        />
      </Form.Group>
      <Button className='my-2' variant="primary" onClick={handleSaveColor}>
        Guardar Color
      </Button>
    </Form>
  );
};

export default ColorForm;
