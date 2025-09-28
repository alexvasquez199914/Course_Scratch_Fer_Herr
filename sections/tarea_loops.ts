export let base = 10;
export let limit = 50;
export let i= 1;
// for(let i = 1; i <= limit; i++){
//     console.log(base,' x ', i, '=' , base*i)
// }

// while ( i <= limit ){
//     console.log(base,' x ', i, '=' , base*i);i++
// }

do {
    console.log(base,' x ', i, '=' , base*i);i++;
} while ( i <= limit);