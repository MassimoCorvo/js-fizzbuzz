//console.log("collegato");

const numbers = document.getElementById("numbers");

for(let i = 1; i <= 100; i++){
    //console.log(i);

    // Caso 1: multipli di 3 e di 5
    if( (i%3) === 0 && (i%5) === 0){
        //console.log("FizzBuzzz");

        numbers.innerHTML += "<tr><td>" + i + "</td><td>FizzBuzz</td></tr>";


    }
    // Caso 2: multipli di 3
     else if ((i%3) === 0){
        //console.log("Fizz");

        numbers.innerHTML += "<tr><td>" + i + "</td><td>Fizz</td></tr>";
    }
    // Caso 3: multipli di 5
     else if ((i%5) === 0){
        //console.log("Buzz");

        numbers.innerHTML += "<tr><td>" + i + "</td><td>Buzz</td></tr>";
    }
    // Tutti gli altri numeri 
    else{
        //console.log(i);

        numbers.innerHTML += "<tr><td>" + i + "</td><td>" + i + "</td></tr>";
    }
}
