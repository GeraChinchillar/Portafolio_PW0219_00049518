var mongoose = require('mongoose');

let database = 'ResgistroApi';
let port = '27017';
let host = 'localhost';
let uri = `mongodb://${host}:${port}/${database}`;

const connectDB = ()=>{
    mongoose.Promise = global.Promise;

    mongoose.connect(uri, {useNewUrlParser:true})
        .then(()=>{
            console.log("Coneccion exitosa")
        })
        .catch(()=>{
            console.log("Error al conectar")
        })
}



    module.exports = { connectDB };