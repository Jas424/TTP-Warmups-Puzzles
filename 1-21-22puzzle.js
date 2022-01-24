var letter = "abcdefghijklmnopqrstuvwxyz";      //This declares a letter string with 26 letters of the aplhabet 
var new_letter = "";                            //This declares the new letter order string empty
var plain = "Random"                       

function shift(n){                           
	for (let i = 0; i < letter.length; i++)     //It starts from 0 and iterates until the size of the letter string
		let offset = (i + 3) % letter.length    //This gets the remainder of the sum of i and 3 divided by the letter length
		new_letter += letter[offset];           //The new letter order will be the remained or the offset that we got
	}
}

function encrypt(plain){                        //Encryption function that takes in the plain text.
    let cipher = "";                            //This declares the string empty
    plain = plain.toLowerCase();                //plain text will be declared to be all lowercase letters
    for (let i = 0; i < plain.length; i++)      //It starts from 0 and iterates until the size of the plain string
        let index = letter.indexOf(plain[i]);   //This gets the numerical order of the letter in the plain string
        cipher += new_letter[index];            //The cipher will be the new letter in new letter string with the same position we got from the index
    }
    return cipher;                              //This returns the ciphertext
}