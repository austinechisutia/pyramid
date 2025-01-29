const charater = "#";
const count = 8;
const rows = [];


for(let i = 0; i<=count; i++){
     rows.push(charater);
}

let result = "";

for(const row of rows){
    result += row + "\n";
   

}
console.log(result);