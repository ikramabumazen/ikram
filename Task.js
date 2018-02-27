
const fs = require('fs');
//call main
main();

function main(){

    //1.read csv file
    let data = fs.readFileSync('./data.csv','utf-8');
    //2.parse csv file to lines 
    let lines = parseCsvFileToLines(data);

}

function parseCsvFileToLines(data){
    let lines = data.split("\n");
    //console.log(lines);
    return lines;
}
