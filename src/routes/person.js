const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM person', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:idPerson', (req, res) => {
    const {idPerson} = req.params;
    mysqlConnection.query('SELECT * FROM person WHERE idPerson = ?',[idPerson], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/addperson', (req, res) => {
    const { curp, rfc, inekey, name, lastname, email, registrationDate, idAddress } = req.body;
    const query = `
    INSERT INTO person (CURP, RFC, INEKey, name, lastname, email, registrationDate, idAddress) VALUES (?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query, [curp, rfc, inekey, name, lastname, email, registrationDate, idAddress], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Persona agregada correctamente'});
            console.log(rows);
        }else{
            console.log(err);
        }
    });
});
router.post('/addperson', (req, res) => {
    const { curp, rfc, inekey, name, lastname, email, registrationDate, idAddress } = req.body;
    const query = `
    INSERT INTO person (CURP, RFC, INEKey, name, lastname, email, registrationDate, idAddress) VALUES (?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query, [curp, rfc, inekey, name, lastname, email, registrationDate, idAddress], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Persona agregada correctamente'});
            console.log(rows);
        }else{
            console.log(err);
        }
    });
});
router.put('/updateperson/:idPerson', (req, res) => {
    const { curp, rfc, inekey, name, lastname, email, registrationDate, idAddress } = req.body;
    const { idPerson } = req.params;
    const query = `
    UPDATE person SET CURP = ?, RFC = ?, INEKey = ?, name = ?, lastname = ?, email = ?, 
    registrationDate = ?, idAddress = ? WHERE (idPerson = ?);
    `;
    mysqlConnection.query(query, [curp, rfc, inekey, name, lastname, email, registrationDate, idAddress, idPerson], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Persona actualizada correctamente'});
            console.log(rows);
        }else{
            console.log(err);
        }
    });
});

router.delete('/deleteperson/:idPerson', (req, res) => {
    const { idPerson } = req.params;
    mysqlConnection.query("DELETE FROM person WHERE idPerson = ?",[idPerson],(err,rows,fields)=>{
        if (!err) {
            res.json({status: 'Persona eliminada correctamente'});
            console.log(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;