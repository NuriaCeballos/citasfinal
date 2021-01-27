const Cita = require('../models/Cita')
const fs = require("fs")
const daoCitas = {}


daoCitas.save = function save(cita) {
    return new Promise((resolved, reject) => {
        let citas = []
        fs.readFile('./dao/cita.json', (err, data) => {
            if (err) reject(err)
            if (data != "") citas = JSON.parse(data)
            citas.push(cita)
            fs.writeFile('./dao/cita.json', JSON.stringify(citas), (err) => {
                if (err) reject(err)
                resolved(cita)
            })
        })
    })
}
/*
daoCitas.eliminar = function eliminar(cita) {
    return new Promise((resolved, reject) => {
        let index = citas.indexOf(idLocalizada)
        if (index > -1) {
            citas.splice(index, 1);
            fs.writeFile('dao/cita.json', JSON.stringify(citas), 'utf-8', err => {
                if (err) reject(err)
                resolved(cita)
            })
        }
    })
}
*/