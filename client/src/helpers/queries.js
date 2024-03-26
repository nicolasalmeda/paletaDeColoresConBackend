const URI = import.meta.env.VITE_API_COLORS;

// const URI = "http://localhost:3000/colores";

// GET COLORES

export const getColores = async () => {
  const response = await fetch(URI);
  const data = await response.json();
  return data;
}

export const postColor = async ({color}) => {
  const response = await fetch(URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(color)
  });
  const data = await response.json();
  return data;
}

// DELETE COLORES

export const deleteColor = async (id) => {
  const response = await fetch(`${URI}/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

// UPDATE COLORES

export const updateColor = async (id, color) => {
  const response = await fetch(`${URI}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(color)
  });
  const data = await response.json();
  return data;
}

// GET COLOR

export const getColor = async (nombre) => {
  const response = await fetch(`${URI}/${nombre}`);
  const data = await response.json();
  return data;
}