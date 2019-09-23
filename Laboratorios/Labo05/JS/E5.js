function e5(palabra){
    var j = palabra.length; 
    var pal = 0;
    for (let i = 0; i < j; i++, j--) {
        if(palabra[i] === palabra[j-1]){
            pal++;
        }      
    }
    if(pal%2 === 0){
        console.log("La palabra es palindrome");
    }
    else{
        console.log("La palabra no es palindrome");
    } 
}

e5("oso");