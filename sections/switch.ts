export let weekDay:number = 7;

if (weekDay<=0){
    throw new Error('Day of week dont allowed');
}

switch (weekDay){
    case 1:
        console.log('Is monday');
        break;
    case 2:
        console.log('Is tuesday');
        break;
    case 3:
        console.log('Is wednesday');
        break;
    case 4:
        console.log('Is thusday');
        break;
    case 5:
        console.log('Is friday');
        break;
    default: 
        console.log('This is not a workable day');
}