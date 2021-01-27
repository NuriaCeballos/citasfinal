const { v4: uuidv4 } = require('uuid')
module.exports=class Cita{
    //constructor
    constructor(cita){
        this.firstname=cita.firstname
        this.lastname=cita.lastname
        this.phone=cita.phone
        this.email=cita.email
        this.date=cita.date
        this.hour=cita.hour
        this.id=uuidv4().substr(-10)

    }
    validar(){
        let errores=[]
        
        //Validar Nombre
            let nombre = this.firstname
            if (this.firstname=="") errores.push({ mensaje1: "El campo nombre no puede estar vacío."})
        
        //Validar email 
            let email=this.email
            let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
            if(emailRegex.test(email)){console.log("El email es correcto.")}
            
            else{errores.push({ mensaje2: "El campo email es incorrecto, introduzca un formato válido."})}
        
        //Validar Teléfono
            let telefono=this.phone
            if (telefono=="") errores.push({ mensaje3: "El campo teléfono no puede estar vacío."})
        
        //Validar fecha 
            let fecha = this.date
            let f= new Date()
            
            let fechaactual=f.getFullYear() + "-0" + (f.getMonth() +1) + "-" + f.getDate()
            console.log(fechaactual)
            
            if(fecha < fechaactual){errores.push({ mensaje4: "Introduzca una fecha válida: debe ser superior a la fecha actual."})}
            
        
            return errores
        }
}