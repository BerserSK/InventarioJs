const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs'); // File System -> Manipular archivos del sistema.
console.clear();
let output = '';
const filename = {
    name: 'multiplicacion_avanzada',
    extension: 'txt'
}

const file = `${filename.name}.${filename.extension}`;

inventory()

let productos = [{
    id: 0,
    nombre: "Arroz",
    cantidad: 2,
    marca: "Diana",
    precio: "2.700"
},
{
    id: 1,
    nombre: "Leche",
    cantidad: 7,
    marca: "San mateo",
    precio: "2.500"
},
{
    id: 2,
    nombre: "Pan",
    cantidad: 15,
    marca: "Bimbo",
    precio: "1.300"
},
{
    id: 3,
    nombre: "Galletas",
    cantidad: 22,
    marca: "Festival",
    precio: "700"
}];



const archivo = new blob[{
    id: 0,
    nombre: "Arroz",
    cantidad: 2,
    marca: "Diana",
    precio: "2.700"
},
{
    id: 1,
    nombre: "Leche",
    cantidad: 7,
    marca: "San mateo",
    precio: "2.500"
},
{
    id: 2,
    nombre: "Pan",
    cantidad: 15,
    marca: "Bimbo",
    precio: "1.300"
},
{
    id: 3,
    nombre: "Galletas",
    cantidad: 22,
    marca: "Festival",
    precio: "700"
},{type:'text/plain'}];

const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
}

function inventory(){
    rl.question(` >>> Ingrese su usuario: <<<\n `, function(usuario){
        rl.question(` >>> Ingrese su contraseña para iniciar sesion: <<<\n`, function(contraseña){
            if(usuario === "William Latorre" && contraseña === "Wa12345" || usuario === "andres2003@gmail.com" && contraseña === "andres2003"){
                menuOp();
            }else if(usuario === "William Latorre" && contraseña !== "Wa12345" ){ 
                console.log("¡¡ Erorr: La contraseña no coincide con el usuario ingresado !!")
                console.log(" ")
                rl.question("", function(ent){
                    console.clear();
                    menuOp()
                })             
            }else if(usuario !== "William Latorre" && contraseña === "Wa12345"){
                console.log("Error: El usuario no coincide con ninguno registrado")
                rl.close();
            }else if(usuario !== "William Latorre" && contraseña !== "Wa12345"){
                console.log("Error: El usuario y la contraseña con coincide con ningun perfil registrado")
                rl.close();
            }
        })
    })
    
    
    function menuOp(){
        console.log('============================================');
        console.log('|                Programa de               |');
        console.log('|                Inventario                |');
        console.log('============================================');
        console.log('|                                          |');
        console.log('|           Por favor seleccione una       |');
        console.log('|               de las opciones            |');
        console.log('|                  del menu                |');
        console.log('|                                          |');
        console.log('|                                          |');
        console.log('|    OPT.      Nombre                      |');
        console.log('| ---------------------------------------- |');
        console.log('|     1        Lista de productos          |');
        console.log('|     2        Registrar producto          |');
        console.log('|     3        Editar producto             |');
        console.log('|     4        Eliminar producto           |');
        console.log('|     5        Venta de producto           |');
        console.log('|     6        Fin de Programa             |');
        console.log('|                                          |');
        console.log('| ---------------------------------------- |');
        console.log('|     Nota: este programa esta realizado   |');
        console.log('|     noje.js con javascript como base.    |');
        console.log('|                                          |');
        console.log('============================================');
        console.log('                                            ');

        rl.question('---> Ingresa un opcion de menu: ', function (opt) {

            console.log(`---> Ingresaste la opción: ${opt}`);
            console.log('                                            ');
            Menu(opt);

            // rl.close();
        });
    }

    



    rl.on('close', function(){
        process.exit(0);
    })


    function Menu(opt){

        switch (opt){
            case '1':
                console.log('                           ');
                console.log('====== Listar Producto====== ');
                console.log('                           ');
                listar();
            break;
            case '2':
                console.log('|                                  |');
                console.log('| ====== Registrar Producto ====== |');
                console.log('|                                  |');
                //llamen la funcion que realiza la suma
                registrar();
            break;
            case '3': 
                console.log('                             ');
                console.log('====== Editar Producto ====== ');
                console.log('                             ');
                //llamen la funcion que realiza la suma
                editar();
            break;
            case '4':
                console.log('                                     ');
                console.log('====== Eliminar Producto ====== ');
                console.log('                                     ');
                //llamen la funcion que realiza la suma
                eliminar();
            break;
            case '5':
                console.log('                       ');
                console.log('====== Venta Producto ====== ');
                console.log('                       ');
                //llamen la funcion que realiza la suma
                venta();
            break;
            case '6':
                console.log('====================================');
                console.log('|       Fin del programa !Adios¡   |');
                console.log('====================================');
            break;
        }


        



        // Listar Producto ------------------------
        function listar(){
            let list = productos[1]
            fs.writeFile(`${file}`, `${output}`, (err)=>{
                if (err) throw err;
                console.table(productos);
                console.log(`Los resultados fueron guardados : \n${list}`);
                console.log(`fue generado en ${file}.`);
                console.log("Presione enter para volver al menu... ")
                rl.question("", function(ent){
                    menuOp()
                })
            });
        }

        /*function ges(){
            fs.writeFile(`${file}.txt`, `${output}`, (err)=>{
                if (err) throw err;
                console.log(productos);
            });
        }*/

        // Registrar Producto ------------------------
        function registrar(){
            console.clear();
            console.log('====================================');
            console.log('|      Registrar un producto       |');
            console.log('====================================');
            rl.question("Nombre de producto: ",function(nombre){
                rl.question("Cantidad del producto: ",function(cant){
                    rl.question("Marca: ",function(marca){
                        rl.question("Precio: ",function(precio){
                            let pos = productos.length+0;
                            productos.push({
                                "id": parseInt(pos),
                                "nombre": `${nombre}`,
                                "cantidad": `${cant}`,
                                "marca": `${marca}`,
                                "precio": `${precio}`
                            });
                            console.log("Producto registrado exitosamente. ");
                            menuOp();
                        })
                    })
                })
            })
        }

        // Editar Producto ------------------------
        function editar(){
            console.clear();
            console.table(productos);
                rl.question("Escriba el id o index correspondiente que desea modificar: ", function(nd){
                    rl.question("Nombre de producto:", function(nombre){
                        rl.question("Cantidad del producto:", function(cant){
                            rl.question("Marca:", function(m){
                                rl.question("Precio:", function(pre){
                                    const modificar = productos.splice(nd, 1,{                                
                                        id: parseInt(nd),
                                        nombre: `${nombre}`,
                                        cantidad: `${cant}`,
                                        marca: `${m}`,
                                        precio: `${pre}`
                                    })
                                    console.log("Producto registrado correctamente.");
                                    menuOp();
                                });
                            });
                        });
                    });
                })
        }
        
        // Eliminar Producto ------------------------
        function eliminar(){
            console.table(productos);
            rl.question("Escriba el id o index correspondiente que desea eliminar: ", function(elm){
                delete productos[elm];
                rl.question("El producto ha sido eliminado correctamente, enter para volver al menu", function(e){
                    menuOp();
                })
            })
        }
    }

    // Venta Producto ------------------------
    function venta(){
        console.table(productos);
        rl.question("Escriba el id correspondiente que desea vender: ",function(opt){
            rl.question("Escriba cual es la cantidad que desea vender: ",function(cant){
                /*const vender = productos[opt].push({                                
                    precio: - `${cant}`
                })
                */
               
                let number = productos[opt].cantidad - cant;

                productos[opt].cantidad = number;
                console.log(`Venta exitosa.`)
                console.log("Presione enter para volver al menu... ")
                rl.question("", function(ent){
                    menuOp()
                })
            })
            
        })
    }
}

