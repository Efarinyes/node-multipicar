'use strict'

// Requireds
const fs = require('fs');
const colors = require('colors');

let llistarArxiu = (base, limit = 10) => {

    if (!Number(base)) {
        console.log(`El valor ${base} introduït  no és un número`);
        return;
    }
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${ base*i}\n`.green);
    }
};

let crearArxiu = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} introduït  no és un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`taulas/taula-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`taula-${base}.txt`);
        });

    });
};
module.exports = {
    crearArxiu,
    llistarArxiu
};