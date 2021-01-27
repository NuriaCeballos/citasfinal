const express = require('express')
const app = express()
const rtMain = require('./routes/rtMain')
const rtCitas = require('./routes/rtCitas')
var exphbs  = require('express-handlebars')

//configuración del motor de plantillas handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//middlewares
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json()) //consumo de json

//enrutador principal
app.use('/',rtMain)
app.use('/citas',rtCitas)

//arrancamos el servidor:
app.listen(3000,(err)=>{
    console.log('Server run on port 3000')
})