console.log("Hello, world!");
console.log("This is a TypeScript file.");

let gasTank: number = 50; // in liters

// while (gasTank > 0) {
//     console.log("Driving... Remaining gas: " + gasTank + " liters");
//     gasTank --; // consume 10 liters of gas per drive
// }  
// console.log("Out of gas! Please refuel.");

while (gasTank > 0) {
    console.log("Driving... Remaining gas: " + gasTank + " liters");
    gasTank --; // consume 10 liters of gas per drive
}
console.log("Out of gas! Please refuel.");