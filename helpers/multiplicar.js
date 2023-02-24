
const fs = require('fs'); // para llamar al paquete de Filesystem
const colors = require ('colors');

const crearArchivo = async (base = 5, listar = false , hasta = 10) => {

    try {

        let salida = ''; //array
        let consola = '';

        for (let i = 1; i <= hasta; i++) {

            let formula = base * i;

            consola += `${colors.blue(base)} * ${i} ${'='.green} ${formula}\n`;
            salida += `${base} * ${i} = ${formula}\n`;

        }

        if (listar) {
            console.log(`===========`);
            console.log(`Tabla del `, colors.blue(base));
            console.log(`===========`);
            console.log(consola);
        }

        // para grabar en un archivo txt se hace lo sig:
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`)

    }
    catch (err) {
        throw err;
    }
}




module.exports = {
    crearArchivo
}