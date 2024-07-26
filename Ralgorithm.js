// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2023)); 



// Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.

function adviseClothing(temperature, isRaining) {
    if (isRaining) {
        return "It's raining. You should wear a raincoat and bring an umbrella.";
    } else if (temperature < 0) {
        return "It's freezing. Wear a heavy winter coat, gloves, and a hat.";
    } else if (temperature >= 0 && temperature <= 10) {
        return "It's cold. Wear a warm jacket or coat.";
    } else if (temperature > 10 && temperature <= 20) {
        return "It's cool. A light jacket or sweater should be sufficient.";
    } else if (temperature > 20 && temperature <= 30) {
        return "It's warm. Wear comfortable, breathable clothing.";
    } else {
        return "It's hot. Wear light, cool clothing and stay hydrated.";
    }
}

// Example usage:
const temperature = parseInt(prompt("Enter the current temperature (in Celsius):"), 10);
const isRaining = prompt("Is it raining? (yes or no):").toLowerCase() === 'yes';

const advice = adviseClothing(temperature, isRaining);
console.log(advice);



// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...)

function recursive(num){
    if(num <= 1){
        return num
    }
    return recursive(num-1) + recursive(num - 2);
}
console.log(recursive(10))


// Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));