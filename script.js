const charater = "#";
const count = 8;
const rows = [];

function rowCount(num1, num2){
    return " ".repeat(num2-num1) +charater.repeat(2*num1-1);
}

let done  = 0;

while(rows.length < count){
    rows.push(rowCount(rows.length+1, count));
}

for(let i = count; i > 0; i--){
    rows.push(rowCount(i, count));

}


let result = "";

for(const row of rows){
    result += row + "\n";
   

}
console.log(result);