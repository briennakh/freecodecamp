/*  Perform a search and replace on the sentence using the arguments provided 
and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For 
example if you mean to replace the word "Book" with the word "dog", it should be 
replaced as "Dog"  */

function myReplace(str, before, after) {
  var words = str.split(" ");
  // Loop through the list of words
  for (var i = 0; i < words.length; i++) {
    // Search for the word to replace
    if (before.toLowerCase() === words[i].toLowerCase()) {
        // Change capitalization of replacement if nonmatching
        if (words[i].charAt(0) == words[i].charAt(0).toUpperCase()) {
            after = after.charAt(0).toUpperCase() + after.slice(1);
        } 
        // Replace the word
        words[i] = after;
    }
  }
  
  return words.join(" ");
}

myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");


