
const fs = require('fs');
//call main
main();

function main(){

    //1.read csv file
    let data = fs.readFileSync('./data.csv','utf-8');
    //2.parse csv file to lines 
    let lines = parseCsvFileToLines(data);
    //3.split lines to Headers and keys
    let { headers , keys}= splitLinesToHeadersAndKeys(lines);

    

}

function parseCsvFileToLines(data){
    let lines = data.split("\n");
    //console.log(lines);
    return lines;
}

function splitLinesToHeadersAndKeys(lines){
    let headers = lines.shift();
    let keys = headers.split(",");
    return { headers, keys }
}
