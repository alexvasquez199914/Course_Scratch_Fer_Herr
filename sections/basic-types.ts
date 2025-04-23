import { log } from "console";

export let lastName:string = 'Herrera';
export let firstName:string = 'Fernando';
 
export let fullName:string = firstName + ' '+ lastName;

console.log(fullName);

export let number1: number = 10;
export let number2: number = 20;
export let valor = 0;

function sum(){
    valor=number1+number2;
    console.log(valor);
}
sum();

export let isActive: boolean=true; 
export let isRunning: boolean=true;
export let hasKids: boolean=true;

console.log('isActive:',isActive);