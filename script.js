const character = "#" // character to be printed
const count = 8 // number of times to print the character
const rows = [];


function createRow(num1, num2) {
    return " ".repeat(num2 - num1) + character.repeat(2*num1-1);
}

// for (let i = 1; i < count; i++) {
//     rows.push(createRow(i, count));
// }


while(rows.length<count) {
    rows.push(createRow(rows.length + 1, count));
    
}
for(let i = count; i> 0; i--){
    rows.push(createRow(i, count));
}

let result = "";

for (const row of rows) {
    result += row + "\n";
}

    
console.log(result);
console.log(rows);
