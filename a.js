const fs = require('fs'); // File System -> Manipular archivos del sistema.
console.clear();
let output = '';
let min = 2;
let max = 6;
const filename = {
    name: 'multiplicacion_avanzada',
    extension: 'txt'
}

const file = `${filename.name}.${filename.extension}`;
let resultados = [];

 // Función para sacar cualquier tabla de un numero como parametro.
function multi(num){
    for(let i = 1; i <= 10; i++){
        //console.log(`${num} * ${i} = ${num*i}`);
        output += `${num} * ${i} = ${num*1}\n`;
        resultados.push(`${num} * ${i} = ${num*1}`)
    }
    
    fs.writeFile(`${file}`, `${output}`, (err)=>{
        if (err) throw err;
        console.log(`#####################################`);
        console.log(`#===== MULTIPLICACIÓN AVANZADO =====#`);
        console.log(`#####################################`);
        console.log(`Los resultados fueron guardados : ${resultados}`);
    });
}

// Función principal.
function multiRango(){ // Función principal.
    for (a = min;a<=max; a++){
        //console.log(`######## -- Tabla del ${a} -- ##########`);
        output += `######## -- Tabla del ${a} -- ##########\n`;
        for (let i=1; i<=10; i++){
            //console.log(`${min} * ${i} = ${min*i}`);
            output += `${min} * ${i} = ${min*i}\n`;
            resultados.push(`${min*i}`);
        }
        min ++;
    }
    fs.writeFile(`${file}`, `${output}`, (err)=>{
        if (err) throw err;
        console.log(`#####################################`);
        console.log(`#===== MULTIPLICACIÓN AVANZADO =====#`);
        console.log(`#####################################`);
        console.log(`La multiplicación entre ${min} y ${max} fue generado en ${file}.`);
        console.log(`Los resultados fueron guardados : \n${resultados}`);
    });
}
multiRango();