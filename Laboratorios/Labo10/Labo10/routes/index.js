var express = require('express');
var router = express.Router();
var register = require("../models/register")

/* GET home page. */
router.get('/', function(request, response, next) {
  console.log(request);
  register.find((error, registers)=>{
    if(error)
      return response.status(500).json({message: "Error interno de Sistema"}); 
    if(registers)
      response.status(200).jason(registers);
    else
      response.status(404).json({message: "no hay registros"})
  });
});


module.exports = router;
