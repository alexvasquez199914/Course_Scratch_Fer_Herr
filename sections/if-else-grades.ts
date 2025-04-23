export let grade=46;
export let gradeletter:string ='';

if (grade>=90){
    gradeletter='A';
    // console.log('The student score is: ',gradeletter);
} else if (grade>=80){
    gradeletter='B';
    // console.log('The student score is: ',gradeletter);
} else if (grade>=70){
    gradeletter='C';
    // console.log('The student score is: ',gradeletter);
} else if (grade>=60){
    gradeletter='D';
    // console.log('The student score is: ',gradeletter);
} else if (grade<60){
    gradeletter='F';
    // console.log('The student score is: ',gradeletter);
}
console.log('The student score is: ',gradeletter);
