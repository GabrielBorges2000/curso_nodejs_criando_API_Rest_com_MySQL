import SelectionController from "./app/controllers/selectionController.js";
import express from 'express';
const app = express();

app.use(express.json())

app.get('/ponto', SelectionController.index);
app.get('/ponto/:id', SelectionController.show);
app.post('/ponto', SelectionController.store);
app.put('/ponto/:id', SelectionController.update);
app.delete('/ponto/:id', SelectionController.delete);

export default app;
