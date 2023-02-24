const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Indica hasta cuanto multiplicar',
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw "La base tiene que ser un numero"
        }
        else {
            return true;
        }

    })
    .argv;

module.exports = argv;