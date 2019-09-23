function e1(arr){
    var l = arr.length;
    var n = 0;
    var b = 0;
    var s = 0;
    var u = 0;

    for( let i=0 ; i<l ; i++){
       switch (typeof arr[i]){
           case "number": 
           n++;
           break;
           case "boolean":
           b++;
           break;
           case "string":
           s++;
           break;
           case "undefined":
           u++;
           break;
       }
    }
    console.log("Number " + n);
    console.log("Boolean " + b);
    console.log("String " + s);
    console.log("undefined " + u);
}

    arr = [1,'n',"hola", true, 5, 2, false, 'j']
    uno(arr);