// console.log(process.argv)

// console.log(process.argv.slice(2)) // para imprimir por pantalla sin los argumentos por default

import { Command } from 'commander'

const program = new Command()

program.option('-d', 'Variable para debug', false)
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'production')
    .requiredOption('-u <user>', 'Usuario que ejecuta el programa', 'Sin usuario')
    .option('-l, --letters [letters...]', 'especifica las letras', []);

program.parse();

console.log('Options', program.opts());
console.log('Argumentos restantes', program.args);