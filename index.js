import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    type: "input",
    name: "userinput",
    message: "Enter the amount of second"
});
let input = res.userinput;
function starttime(val) {
    const initime = new Date().setSeconds(new Date().getSeconds() + val);
    const Intervaltime = new Date(initime);
    setInterval(() => {
        const currenttime = new Date();
        const timediff = differenceInSeconds(Intervaltime, currenttime);
        if (timediff <= 0) {
            console.log("time has expired");
            process.exit();
        }
        const minute = Math.floor((timediff % (3600 * 24)) / 3600);
        const se = Math.floor(timediff % 60);
        console.log(`${minute}:${se}`);
    }, 1000);
}
starttime(input);