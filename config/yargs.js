const argv = require('yargs')
    .options('b', {
        alias : 'base',
        type: 'number',
        demandOption : true,
        describe : 'Es la base de la tabla de multiplicar'
    })
    .options('l', {
        alias : 'listar',
        type : 'boolean',
        default : false,
        describe : 'Muestra la tabla en consola'
    })
    .options('h', {
        alias : 'hasta',
        type : 'number',
        default : 10,
        describe : 'Es el limite de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if(isNaN(argv.b) || isNaN(argv.h) ) {
            throw 'La base/hasta tiene que ser un numero'
        }
        return true;
    })
    .argv;
module.exports = argv;