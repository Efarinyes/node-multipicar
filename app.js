const argv = require('./configs//yargs').argv;

const colors = require('colors');

const { crearArxiu, llistarArxiu } = require('./multiplicar/multiplicar');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'llistar':
        console.log('Llistar');
        llistarArxiu(argv.base, argv.limit);
        break;

    case 'crear':
        console.log('Crear');
        crearArxiu(argv.base, argv.limit)
            .then(arxiu => console.log(`Arxiu ${arxiu.red} creat correctament`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Ordre no reconeguda');
}

// console.log(process.argv);

// let argv = process.argv;
// let parametre = argv[2];
// let base = parametre.split('=')[1];
let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limit', argv.limit);