import SeletionRepository from '../repositories/selectionRepository.js';
class SelectionController {

    async index(req, res) {
        const sql = await SeletionRepository.findAll();
        res.status(200).json(sql);
    };

    async show(req, res) {
        const id = req.params.id;
        const sql = await SeletionRepository.findById(id);
        res.status(200).json(sql);
    };

    async store(req, res) {
        const ponto = req.body;
        const sql = await SeletionRepository.create(ponto);
        res.status(201).json(sql);
    };

    async update(req, res) {
        const id = req.params.id;
        const ponto = req.body;
        const sql = await SeletionRepository.update(ponto, id);
        res.status(200).json(sql);

    };

    async delete(req, res) {
        const id = req.params.id;
        const sql = await SeletionRepository.delete(id);
        res.status(204).json(sql);
    };

};

export default new SelectionController();
