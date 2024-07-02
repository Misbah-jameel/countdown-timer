
// #!/usr/bin/env node
import chalk from "chalk";
import { differenceInSeconds } from "date-fns"
import inquirer from "inquirer"
console.log("===============WELCOME TO MY COUNTDOWN TIMER GAME===================")
const res = await inquirer.prompt
(
    
        {
            type : "number",
            name : "userInput",
            message :  chalk.bgMagenta.bold.white('please Enter the amount of second'),
            validate :(input)=>{
                if(isNaN(input)){
                    return  chalk.bgRedBright("please enter a valid number")
                }else if(input > 100){
                    return "seconds must be in 60"
                }else{
                    return true;
                }

            }
        }
);
let input = res.userInput;
function startTime(val : number){
  const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((()=>{
        const currentTime = new Date()
        const timeDiff =differenceInSeconds ( intervalTime,currentTime)
        


if (timeDiff <= 0) {
    console.log(chalk.bgRedBright("time has expired"))
    process.exit();
 
}
const min = Math.floor((timeDiff%(3600*24))/3600)
const sec = Math.floor(timeDiff%60);
console.log( chalk.bold.blueBright(`min: ${min.toString().padStart(2,"0")} sec: ${sec.toString().padStart(2,"0")}`));
}),1000)
}
startTime(input);
