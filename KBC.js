const prompt = require("prompt-sync")();
//Simple quiz game in Java Script
console.log("\t\t\t\t\t\t\t\tWelocme to KBC");
let score=0;
console.log("\t\t\t\t\t\t\t     Questions and Answere!");

let ques1=("Who is the founder of Pakistan?");
let options1=("1.M.ali jinnah 2. Liaqat ali khan\n3.Imran khan 4.Donuld Trump");

function question1(){
    console.log("Question no:1");
    console.log(ques1);
    console.log(options1);   

    let choice=Number.parseInt(prompt("type here:"));

    if (isNaN(choice)) {
        console.log("Invalid input. Please enter a number.");
        return question1();
      }
    
    switch (choice) {
        case 1:
            score++
            break;
        default:
            console.log("Youe lose, Try Again!");
            break;
    }
    console.log("your score is",score); 
}

let ques2=("Who is the PM of Pakistan?");
let options2=("1.Shahbaz Sharif 2. Liaqat ali khan\n3.Imran khan 4.Donuld Trump");

function question2(){
    console.log("Question no:2");
    console.log(ques2);
    console.log(options2);
    let choice=Number.parseInt(prompt("type here:"));

    if (isNaN(choice)) {
        console.log("Invalid input. Please enter a number.");
        return question1();
    }

    switch (choice) {
        case 1:
            score++
            break;
        default:
            console.log("Youe lose, Try Again!");
            break;
    }
    console.log("your score is",score);   
}
question1();
question2();