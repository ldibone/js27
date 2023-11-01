function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz()


  //
  function findMissingNumber(arr) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i) {
        return i;
      }
    }
  
    return arr.length;
  }
  
  const inputArray = [3, 0, 1];
  const missingNumber = findMissingNumber(inputArray);
  console.log(missingNumber); 
  
  
  