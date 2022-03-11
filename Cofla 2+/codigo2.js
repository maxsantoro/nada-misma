
// historia de cofla 3

class Celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
       } else{
           alert("celular apagado")
           this.encendido = false;
       }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
        `;
    }
}
class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra ${this.resolucionDeCamaraExtra} `
    }
}
// celular1 = new Celular ("rojo","150g","5'","hd","1GB")
// celular2 = new Celular ("negro","155g","5.4'","full hd","2GB")
// celular3 = new Celular ("blanco","146g","5.9'","full hd","2GB")

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130g","5.2","4K","3GB","full hd");
celular2 = new CelularAltaGama("negro","142","5.2","4K","3GB","hd");

document.write(`
${celular1.infoAltaGama()}<br><br>
${celular2.infoAltaGama()}<br>
`);

