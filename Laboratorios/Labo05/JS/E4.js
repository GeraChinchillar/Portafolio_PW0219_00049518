function cuatro(numero){
    valores = [];
    var random;

    for (var i=0; i<20; i++){
        random = (Math.floor(Math.random()*100)+1);
        valores.push(random);
    }
    for(var j=0; j<20; j++){
        if(numero === valores[j]){
            console.log("ganaste");
        }
        else{
        console.log("perdiste");
        }
    }
    return valores;
}