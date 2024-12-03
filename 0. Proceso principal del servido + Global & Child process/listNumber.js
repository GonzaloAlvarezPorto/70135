import { Command } from "commander";

const program = new Command();

program.option('-d', 'variable para debug', false)
    .option('-p <port>', 'Puerto', 8080)
    .option('-n --numbers [numbers...]', 'Numeros informados');

program.parse();

const numbers = program.opts().numbers;
const parsedNumbers = numbers.map(num => parseInt(num))

const listOfNumbers = (numbers) => {
    parsedNumbers.forEach(num => {
        if(isNaN(num)){
            throw {
                description: 'Error de tipo',
                tipos: parsedNumbers.map(num => isNaN(num) ? 'NaN' : typeof num)
            }
        }
    })
}

listOfNumbers(parsedNumbers);

process.on('uncaughtException', (err) => {
    console.log(err);
})

process.on('exit', () => {
    console.log('Saliendo del programa');
})