
let pc1 = {
    nombre: "DaltoPc",
    procesador: "intel core i7",
    ram:"16GB",
    espacio: "1TB"
};
let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi pc es: <b>${nombre}</b><br>
         el procesador es :<b>${procesador}</b><br>
         la memoria ram es :<b>${ram}</b> <br>
         el espacio en disco es: <b>${espacio}</b><br>`


document.write(frase)
