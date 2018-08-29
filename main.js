// Write a script function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function strAlpha(str) {
  var arr = str.split(''),
   alpha = arr.sort().join('').replace(/\s+/g, '');
   return alpha
}
console.log(strAlpha("hello my name is geoff"))

// Write a script that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'
//.toUpperCase()
//str[i].charAt(0).toUpperCase()

function strUpper(str) {
  str = str.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ')
  }
  
  console.log(strUpper("hello my name is geoff"))

//   Write a script that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function strLongest(str) {
  var str = str.split(' ')
  var longestWord = 0
  for(var i =0; i < str.length; i++) {
    if(str[i].length > longestWord) {
      longestWord = str[i].length
    }
  }
  return longestWord 
}
console.log(strLongest('hello my name is geeeeeeooooooofffffff'))

//how would you return the word?

function strLongest(str) {
  var str = str.split(' ')
  str.sort(function(a,b) {return a.length-b.length})
  return str.pop()
}
console.log(strLongest('why is this so haaaaaaaaard'))



// Write a script that accepts a string as a parameter and counts the number of vowels within the string.

// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5


function strVowel(str) {
  var vowel = 0
  for (i=0; i<= str.length; i++) {
    if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u' ){
      vowel +=1
    }
  }
  return vowel
}

console.log(strVowel('The quick brown fox'))



// Write a script that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function prime(num) {
  for(i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return num > 1
}
console.log(prime(4))


// Write a script which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.


function dataType(){

}



// Write a JavaScript function which will take an array of numbers and find the second lowest and second greatest numbers, respectively.

// Sample array : [1,2,3,4,5]
// Expected Output : 2,4


