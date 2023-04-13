import conetion from "../database/conetion.js";

class SeletionRepository {

    create(ponto) {
        const sql = 'INSERT INTO ponto SET ?;'
        return new Promise((resolve, reject) => {
            conetion.query(sql, ponto, (error, result) => {
                if (error) return reject('Não foi possivel criar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    findAll() {
        const sql = 'SELECT * FROM ponto;'
        return new Promise((resolve, reject) => {
            conetion.query(sql, (error, result) => {
                if (error) return reject('Não foi possivel localizar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    findById(id) {
        const sql = 'SELECT * FROM ponto WHERE id=?;'
        return new Promise((resolve, reject) => {
            conetion.query(sql, id, (error, result) => {
                if (error) return reject('Não foi possivel localizar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    update(ponto, id) {
        const sql = 'UPDATE ponto SET ? WHERE id=?;'
        return new Promise((resolve, reject) => {
            conetion.query(sql, [ponto, id,], (error, result) => {
                if(error) return reject('Não foi possivel localizar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    delete(id) {
        const sql = 'DELETE FROM ponto WHERE id=?;'
        return new Promise((resolve, reject) => {
            conetion.query(sql, id, (error, result) => {
                if (error) return reject('Não foi possivel localizar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
     }

}

export default new SeletionRepository();