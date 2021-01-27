const express = require('express')
const rtCitas = express.Router()
const fs = require('fs')
const QRCode = require('qrcode')
const Cita = require('../models/Cita')

let citas = JSON.parse(fs.readFileSync('./dao/cita.json', 'utf-8'))

rtCitas.post('/procesar', (req, res) => {
    let newCita = new Cita(req.body)

    let existe = false
    citas.forEach(cita => {

        if (newCita.date == cita.date && newCita.hour == cita.hour) existe = true
        console.log(cita.hour)
    })

    if (!existe) {
        citas.push(newCita)
        fs.writeFile('dao/cita.json', JSON.stringify(citas), 'utf-8', err => {
            if (err)
                console.log()
            else
                console.log('archivo creado')
        })
        res.render('respuesta', { newCita: newCita })
    } else {

        res.render('error')
    }

    res.render('respuesta', { newCita: newCita })
})

rtCitas.get('/consultar', (req, res) => {

    res.render('cambiarcita',{citas})
})

rtCitas.post('/consultar', (req, res) => {
    let idcambiar = req.body.idcambiar
    let idLocalizada = citas.find(cita => `${idcambiar}` == cita.id)
    //console.log(idLocalizada)
    res.render('cambiarcita', { idLocalizada: idLocalizada })


    rtCitas.get('/eliminar', (req, res) => {
       //daoCitas.eliminar(idLocalizada)

         let index = citas.indexOf(idLocalizada);
          if (index > -1) {
              citas.splice(index, 1);
              fs.writeFile('dao/cita.json', JSON.stringify(citas), 'utf-8', err => {
                  if (err)
                      console.log()
                  else
                      res.render('citaeliminada', { idLocalizada: idLocalizada })
              })
  
          }
          console.log(citas) 

    })   

})

module.exports = rtCitas