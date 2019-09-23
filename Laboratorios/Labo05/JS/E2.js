function e2(arr){
    var sum = 0;
    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    var prom = sum/arr.length;

    console.log("suma = " + sum);
    console.log("promedio = " + prom);

}

arr = [1,2,3,4,5,6,7,8,9,10]
e2(arr);