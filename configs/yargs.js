const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('llistar', 'Mostra en consola la taula de multiplicar', opt)
    .command('crear', 'Genera la taula de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}