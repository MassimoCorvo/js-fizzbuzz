//console.log("collegato");

for(let i = 1; i <= 100; i++){
    //console.log(i);

    // Caso 1: multipli di 3 e di 5
    if( (i%3) === 0 && (i%5) === 0){
        console.log("FizzBuzzz");
    }
    // Caso 2: multipli di 3
     else if ((i%3) === 0){
        console.log("Fizz");
    }
    // Caso 3: multipli di 5
     else if ((i%5) === 0){
        console.log("Buzz");
    }
    // Tutti gli altri numeri 
    else{
        console.log(i);
    }
}
