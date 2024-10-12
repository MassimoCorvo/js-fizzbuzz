

# FizzBuzz

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.









## Logica

Occorre un ciclo for per effettuare la stampa dei 100 valori:

- i=1    : 1 perchè devo stampare i numeri a partire da 1
- i<=100 : 100 deve essere l'ultimo valore stampato
- i++    : valori crescenti


Dentro i ciclo for occorre distinguere vari casi:

- multipli di 3: si stampa Fizz
- multipli di 5: si stampa Buzz
- multipli sia di 3 che di 5: si stampa FizzBuzz
- tutti i restanti numeri

Si verifica se un numero sia multiplo di un altro attraverso l'operatore di resto "%".
