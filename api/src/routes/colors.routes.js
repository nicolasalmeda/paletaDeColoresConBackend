import { Router } from "express";
import { getColores, postColor, deleteColor, updateColor,getColor } from '../controllers/colors.controllers.js';

const router = Router();

router.route('/colores').get(getColores).post(postColor);
router.route('/colores/:id').delete(deleteColor).put(updateColor);
router.route('/colores/:nombre').get(getColor);

export default router;