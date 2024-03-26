import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
  color: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 7
  },
  nombre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    unique: true
  },
});

const Color = mongoose.model('Color', tareaSchema);
export default Color;