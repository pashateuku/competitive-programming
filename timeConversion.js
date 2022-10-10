'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let splitTime12 = s.split(':');
    let time24Hour = Number(splitTime12[0]);
    console.log(time24Hour)
        
    if(s[8] == 'P'){
    
        if(time24Hour != 12){
            time24Hour += 12;
        }

        let time24 = time24Hour + s.slice(2).replace('PM','')
        return time24;
    }
    else if(s[8] == 'A'){
        console.log(time24Hour)
        
        if(time24Hour == 12){
            console.log(time24Hour)
            time24Hour = time24Hour - 12 + '0';
        } 
        else if(time24Hour >= 1 && time24Hour <= 9){
            time24Hour = '0' + time24Hour;
        }

        let time24 = time24Hour + s.slice(2).replace('AM','')
        return time24;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
