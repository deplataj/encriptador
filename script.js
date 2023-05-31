
const textoIngresado= document.querySelector(".text-area");
const TextoEncriptado=document.querySelector(".cajaEncriptando");



function botonEnciptar(){
    
    
    const txtEncriptado= encriptarTexto(textoIngresado.value);
    TextoEncriptado.value=txtEncriptado;
    textoIngresado.value=" ";
    TextoEncriptado.style.backgroundImage="none";
    const mensaje=document.querySelector(".borrar-txt");
    const mensaje2=document.querySelector(".borrar-txt2");
    mensaje.remove();
    mensaje2.remove();
  
}


function encriptarTexto(stringAencriptar){

    let MatrizClave=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //stringAencriptar=stringAencriptar.toLowerCase();  
    validador=true;
    validador=validarLetras(stringAencriptar);
    if(validador==true) {
        for(let i=0; i<MatrizClave.length; i++){

            if(stringAencriptar.includes(MatrizClave[i][0])){

                stringAencriptar=stringAencriptar.replaceAll(MatrizClave[i][0],MatrizClave[i][1]);

        }

        }
        return stringAencriptar;
        
    } 
    else{
        recargar();

    }
}

function botonDesencriptar(){
    
    const txtDesencriptado= desencriptarTexto(textoIngresado.value);
    TextoEncriptado.value=txtDesencriptado;
    textoIngresado.value=" ";
   
    
}

function desencriptarTexto(stringAdesencriptar){

    let MatrizClave=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringAdesencriptar=stringAdesencriptar.toLowerCase();  
    
    for(let i=0; i<MatrizClave.length; i++){

        if(stringAdesencriptar.includes(MatrizClave[i][1])){

            stringAdesencriptar=stringAdesencriptar.replaceAll(MatrizClave[i][1],MatrizClave[i][0]);

       }

    }
return stringAdesencriptar;

}

function botonCopiarTexto(){
  
    const auxiliar=TextoEncriptado.value;
    textoIngresado.value=auxiliar;
  
    TextoEncriptado.value=" ";
    
}

function validarLetras(string){
   
    //Se añaden las letras validas
    var filtro = ' abcdefghijklmnñopqrstuvwxyz';//Caracteres validos
	
    for (var i=0; i<string.length; i++){
       if (filtro.indexOf(string.charAt(i)) == -1) {
        	alert("esta tratando de ingresar un caracter no valido");
            textoIngresado.value=" "; 
            TextoEncriptado.value=" "; 
            return false;
            break;   
            
       }
    
    }

    return true;
}

function recargar () {
    window.location.href = window.location.href;
}