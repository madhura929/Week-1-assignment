/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let a1=str1.length;
    let a2=str2.length;
    if (a1!=a2)
        return false;

     str1.sort();
     str2.sort()

     for (var i=0;i<a1;i++)
         if (str1[i]!=str[2])
             return false;

        else 
             return true;
}

module.exports = isAnagram;
