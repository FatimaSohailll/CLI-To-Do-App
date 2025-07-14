import readline from "readline";
import chalk from 'chalk';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos =[];

const showMenu = () => {
    console.log(chalk.bold.green("\n1: Add a Task"));
    console.log(chalk.bold.green("2: View Tasks"));
    console.log(chalk.bold.green("3: Exit"));

    rl.question(chalk.bold.cyan("Choose an option: "), handleInput);
}

const handleInput = (option) => {
    if (option === "1"){
        rl.question(chalk.magenta("Enter a Task: "),(task) => {
            todos.push(task);
            console.log(chalk.magentaBright("\nTask added: ") + task);
            showMenu();
        })
    }
    else if (option ==="2"){
        console.log(chalk.magenta("\nYour Todo List: "));
        
        todos.forEach((task, index) => {
            console.log(chalk.italic.yellow(`${index+1}. ${task}`));
        })
        showMenu();
    }
     else if (option ==="3"){
        console.log(chalk.magenta('Good bye\n'));
        rl.close();
    }
    else{
        console.log(chalk.bold.red("ERROR: ") + chalk.italic("Choose again"));
        showMenu();
    }

}

showMenu();