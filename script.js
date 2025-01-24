const characters = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i++) {
    rows.push(i)
    
}

let result = "";

for(const row of rows){
    result = result + row;
}
console.log(result);
