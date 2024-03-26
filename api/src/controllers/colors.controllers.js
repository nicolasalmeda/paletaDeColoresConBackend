import Color from "../database/models/color.js";

export const getColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const postColor = async (req, res) => {
  const {color,nombre} = req.body;
  try {
    const newColor = new Color({nombre, color});
    await newColor.save();
    res.status(201).json({ message: "Color guardado", color: newColor });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
}

export const deleteColor = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    await Color.findByIdAndDelete(id);
    res.json({ message: "Color eliminado" });
  } catch (error) {
    console.log(error)
    res.status(409).json({ message: error.message });
  }
}

export const updateColor = async (req, res) => {
  const { id } = req.params;
  const color = req.body;
  try {
    await Color.findByIdAndUpdate(id, color);
    res.status(200).json({ message: "Color actualizado" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const getColor = async (req, res) => {
  const { nombre } = req.params;
  try {
    const color = await Color.findOne({nombre});
    res.status(200).json(color);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
}