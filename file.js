let temperatures = [30, 32, 29, 31, 33, 28, 30];

let fourthDayTemperature = temperatures[3]; 
console.log("Temperature on the 4th day:", fourthDayTemperature);

temperatures[3] = fourthDayTemperature + 2; 
console.log("Updated temperature for the 4th day:", temperatures[3]);

console.log("Updated temperatures for all 7 days:", temperatures);
