//console.log("collegato");

const numbers = document.getElementById("numbers");

for(let i = 1; i <= 100; i++){
    //console.log(i);
    let print;

    // Caso 1: multipli di 3 e di 5
    if( (i%3) === 0 && (i%5) === 0){
        //console.log("FizzBuzzz");

        print = "FizzBuzz";

    }
    // Caso 2: multipli di 3
     else if ((i%3) === 0){
        //console.log("Fizz");

        print = "Fizz";

    }
    // Caso 3: multipli di 5
     else if ((i%5) === 0){
        //console.log("Buzz");

        print = "Buzz";
    }
    // Tutti gli altri numeri 
    else{
        //console.log(i);

        print = i;
    }

    numbers.innerHTML += "<tr><td>" + i + "</td><td>" + print + "</td></tr>";
}

//Tabella a righe colorate alternate
document.querySelector("table").classList.add("table-striped");
