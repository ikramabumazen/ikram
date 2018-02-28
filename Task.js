
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
    //4.parse lines to array of users 
    let usersArray = parseLinesToArryOfUsers(lines, keys);
    //5.validation 
      //1.validateUsers
      let array= [];
      array = validUsers(usersArray);

    

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

function parseFileToLinesAndHeaders(fileContent) {
    let lines = fileContent.split("\n")
    //console.log(lines);
    let headers = lines.shift();
    let keys = headers.split(",");
    return { lines, headers, keys }
}

function parseLinesToArryOfUsers(lines,keys){
    let users = lines.map(line => {
        let obj = {};
        value = line.split(',');
        keys.forEach((item, index) => {
            obj[item] = value[index];
        });

        return obj;
    });
    return users;
}

function validUsers(usersArray){
    let validU = [];
    let invalidU = [];

    usersArray.forEach((user, index) => {
        if ( isValidU(user, usersArray) && !idDublication(user.id, usersArray)) {
            validU.push(user);
        }
        else {
            invalidU.push(user);
        }
    })
    
    return {  validU , invalidU };
}
/////////////////////////////////////

function isValidU(user, usersArray){
    let value = 
    user && 
    idValidation(user.id , usersArray) && 
    emailValidation(user.email) && 
    ageValidation(user.age);

    return value;

}

/////////////////////////////////////
//1
function idDublication(id, usersArray){

    let count = 0;
    users.forEach(user => { if (user.id == id) { count++;  }
    });

    if (count > 1) {

        console.log('ID is Dublicated');
        return true;
    }
    else {

        console.log('ID is not Dublicated');
        return false;
    }
}

//2
function idValidation(id , usersArray) {
    return id == true ;
    }
    