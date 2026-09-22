function getGrade(marks){
    if(marks>=90) return "A";
    if(marks>=70) return "B";
    if(marks>=60) return "C";
}
console.log(getGrade(85));