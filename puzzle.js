function fizzbuzzFunction(x) {
    for (let i=1; i<=x; i++) {
        // loop all elements from i to x

        if (i%3 == 0 && i%5 ==0 && i != 0) {
            console.log('Fizz Buzz');
        }
         // if the number is divisible by 3 and 5 and the remainder is  0, then the function will print out the word 'Fizz Buzz' instead of the number.

        else if (i%5 == 0 && i != 0){
            console.log('Buzz');
        }
        // if the number is divisible by 3 and 5 aand the remainder is  0, then the function will print out the word ' Buzz' instead of the number.

        else if(i%3 == 0 && i != 0){
            console.log('Fizz');
        }

       // if the number is divisible by 3 then the function will print out the word 'Fizz' instead of the number.

       else
           console.log( i , " ");

        // The number will display if the number is not divisible by 3,5 or 15.
