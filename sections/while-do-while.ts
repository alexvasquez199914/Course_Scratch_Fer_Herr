
// let gasTank: number = 50; // in liters

// while (gasTank > 0) {
//     console.log("Driving... Remaining gas: " + gasTank + " liters");
//     gasTank --; // consume 10 liters of gas per drive
// }  
// console.log("Out of gas! Please refuel.");

// while (gasTank > 0) {
//     console.log("Driving... Remaining gas: " + gasTank + " liters");
//     gasTank --; // consume 10 liters of gas per drive
// }
// console.log("Out of gas! Please refuel.");

export let gasTank: number = 1; // in liters


do {
    console.log("Driving... Remaining gas: " + gasTank + " liters");
    gasTank --; // consume 10 liters of gas per drive
} while (gasTank > 0)
console.log("Out of gas! Please refuel.");
