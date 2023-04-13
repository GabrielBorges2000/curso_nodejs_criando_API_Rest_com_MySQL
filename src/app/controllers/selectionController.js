import conetion from "../database/conetion.js";
import SeletionRepository from '../repositories/selectionRepository.js'

class SelectionController {

    async index(req, res) {
        const sql = await SeletionRepository.findAll()
        res.json(sql)
    };

    async show(req, res) {
        const id = req.params.id
        const sql = await SeletionRepository.findById(id)
        res.json(sql)
    };

    async store(req, res) {
        const ponto = req.body
        const sql = await SeletionRepository.create(ponto)
        res.json(sql)
    };

    async update(req, res) {
        const id = req.params.id
        const ponto = req.body
        const sql = await SeletionRepository.update(ponto, id)
        res.json(sql)
       
    };

    async delete(req, res) {
        const id = req.params.id
        const sql = await SeletionRepository.delete(id)
        res.json(sql)
    };

}

export default new SelectionController();