import { consulta } from "../database/dbQuery.js";


class SeletionRepository {

    create(ponto) {
        const sql = 'INSERT INTO ponto SET ?;'
        return consulta(sql, ponto, 'Could not create');
    };

    findAll() {
        const sql = 'SELECT * FROM ponto;'
        return consulta(sql, 'Could not find');
    };

    findById(id) {
        const sql = 'SELECT * FROM ponto WHERE id=?;'
        return consulta(sql, id, 'Could not find id');
    };

    update(ponto, id) {
        const sql = 'UPDATE ponto SET ? WHERE id=?;'
        return consulta(sql, [ponto, id,], "Couldn't update");
    };

    delete(id) {
        const sql = 'DELETE FROM ponto WHERE id=?;'
        return consulta(sql, id, "Couldn't delete");
    };
};

export default new SeletionRepository();
