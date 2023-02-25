const { demandCommand, demandOption, boolean } = require('yargs');
const { crearArchivo } = require(`./helpers/multiplicar`);
const argv = require('./config/yargs');
const colors = require ('colors');

console.clear();


//console.log(process.argv)
console.log(argv)

//console.log('base: yargs', argv.base)


//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

// el = 5 se pone para que sea por defecto en caso de no asignar nada a base

//console.log(base);

//let base = 5;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));







