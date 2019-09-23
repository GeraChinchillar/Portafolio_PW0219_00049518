function e3(num, arr){
    var cont = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] === num) cont++;
    }

    console.log("ocurrencias: " + cont);

}

arr = [1, 2, 3 , 5, 2, 2, 5]
e3(2, arr);