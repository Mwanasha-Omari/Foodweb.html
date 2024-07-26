let dateToday=new Date();
 let month =String(dateToday.getMonth()+1)
.padStart(1,'0');
let day =String(dateToday.getDate())
.padStart(1,'0');
let year =dateToday.getFullYear();
let output=day+ ':'+month + ':'+year +'';
console.log(output);



