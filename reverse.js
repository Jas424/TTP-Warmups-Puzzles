
function reverseString(input) {    // This is a function to reverse a string
   
    //This initializes a variable that will hold the reversed string to output
    var backwards = "";

    /*need to access last entry of the input string
    /b/c position starts at 0: last entry = length of input-1
    iterate through the string starting from back until position is 0
    */

   for (i = input.length-1; i>=0; i--)
   backwards = backwards +input[i];
    return backwards;
}


x =(reverseString("porcupines playing"));
console.log(x);


   // Worked with friend on this code