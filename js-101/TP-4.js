function palindrome(text) {
    let reverse  = text.toLowerCase().split('').reverse().join('');     
    return text === reverse;  
    }

text = 'ollo'

console.log(palindrome(text))
