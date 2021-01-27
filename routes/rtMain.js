const express = require('express')
const rtMain = express.Router()
const QRCode = require('qrcode')
const fs = require('fs')
let citas = JSON.parse(fs.readFileSync('./dao/cita.json', 'utf-8'))
rtMain.get('/',(req,res)=>{
    res.render('home',{citas})   
})
  


module.exports=rtMain