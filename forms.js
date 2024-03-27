let dateToday=new Date();
 let month =String(dateToday.getMonth()+1)
.padStart(2,'0');
let day =String(dateToday.getDate())
.padStart(2,'0');
let year =dateToday.getFullYear();
let output=day+ '/'+month + '/'+year +'/';


console.log(output);


