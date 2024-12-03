import { Command } from 'commander';
import express from 'express'
import { getVariables } from './config.js';

const app = express();

const program = new Command();

program.option('-d', 'variable para debug', false)
    .option('--mode <mode>', 'modo de trabajo', 'production');
    
const options = program.parse();

const { port, adminName } = getVariables(options)

console.log(port, adminName)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})