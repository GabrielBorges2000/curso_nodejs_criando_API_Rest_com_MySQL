import { Router } from "express";
import SelectionController from "./app/controllers/selectionController.js";

const router = Router();

router.get('/ponto', SelectionController.index);
router.get('/ponto/:id', SelectionController.show);
router.post('/ponto', SelectionController.store);
router.put('/ponto/:id', SelectionController.update);
router.delete('/ponto/:id', SelectionController.delete);

export default router;