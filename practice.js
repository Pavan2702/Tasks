const readlinesync = require("readline-sync");

const sqreFun = () => {
  const num = readlinesync.questionInt("Enter a number: ");

  if (num <= 0) {
    console.log("Enter a positive number");
  } else {
    for (let i = 1; i <= num; i++) {
      console.log(i * i);
    }
  }
};

// sqreFun();

function generateFibonacciSeries(n) {
    if (n <= 0) {
      console.log("Please enter a positive number greater than 0.");
      return [];
    }
  
    const series = [0];
    if (n > 1) {
      series.push(1);
    }
  
    for (let i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
  
    return series;
  }
  
  // Example usage:
  const readlineSync = require('readline-sync');
  const terms = readlineSync.questionInt('Enter the number of terms for Fibonacci series: ');
  const fibonacciSeries = generateFibonacciSeries(terms);
  console.log(`Fibonacci series (${terms} terms):`, fibonacciSeries);
  
//   Geometry series 

// const readlineSync = require('readline-sync');

const geometrySeries = () => {
  const terms = readlineSync.questionInt('Enter the number of terms for Geometry series: ');

  if (terms <= 0) {
    console.log('Please enter a positive number greater than 0.');
    return;
  }

  const series = [1];

  for (let i = 1; i < terms; i++) {
    series.push(series[i - 1] * 2);
  }

  console.log(`Geometry series (${terms} terms):`, series);
};

geometrySeries();

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }
  
  function generatePalindromeSeries(count) {
    if (count <= 0) {
      console.log("Please enter a positive number greater than 0.");
      return [];
    }
  
    const series = [];
    let num = 1;
  
    while (series.length < count) {
      if (isPalindrome(num)) {
        series.push(num);
      }
      num++;
    }
  
    return series;
  }
  
  // Example usage:
  const termsUpto = readlineSync.questionInt('Enter the number of termsUpto for the palindrome series: ');
  const palindromeSeries = generatePalindromeSeries(termsUpto);
  console.log(`Palindrome series (${termsUpto} terms):`, palindromeSeries);
  