//funcion encriptar texto
function encriptarTexto(texto){
    //diccionario de encriptacion
    if (/[^a-z\s]/.test(texto)) {
        alert("El texto solo debe contener letras minúsculas y sin acentos.");
        return null;
    }
        let diccionario = {
            'a':'ai',
            'e':'enter',
            'i':'imes',
            'o':'ober',
            'u':'ufat'
        };
    
        return texto.replace(/[aeiou]/g,function(vocal){
            return diccionario[vocal];
        });
    }
    //funcion desencriptar texto
    function desencriptarTexto(texto){ 
        if (/[^a-z\s]/.test(texto)) {
            alert("El texto solo debe contener letras minúsculas y sin acentos.");
            return null;
        }
        texto=texto.replace(/ai/g,'a');
        texto=texto.replace(/enter/g,'e');
        texto=texto.replace(/imes/g,'i');
        texto=texto.replace(/ober/g,'o');
        texto=texto.replace(/ufat/g,'u');
        return texto;
    }
    
    //traemos los elementos del domm
    
    let texto_original = document.getElementById('encriptar_texto');
    let texto_a_encriptado = document.getElementById('desencriptar_texto');
    let buttonEncriptar = document.getElementById('button_encriptar');
    let buttonDesencriptar = document.getElementById('button_desencriptar');
    let buttonCopiar = document.getElementById("button_copiar");
    let buttonOscuro = document.getElementById("modo_obscuro");
    let buttonClaro = document.getElementById("modo_claro");
    
    //evento click
    
    buttonEncriptar.addEventListener('click',function(){
        let texto=texto_original.value;
        let textoEncriptado =encriptarTexto(texto);
        texto_a_encriptado.value=textoEncriptado;
    });
    buttonDesencriptar.addEventListener('click',function(){
        let texto  = texto_original.value;
        let textoDesencriptado = desencriptarTexto(texto);
        texto_a_encriptado.value=textoDesencriptado;
    });
    buttonCopiar.addEventListener('click',function(){
        let texto_a_copiar = texto_a_encriptado;
        navigator.clipboard.writeText(texto_a_copiar.value);
        alert("texto copiado al portapapeles");
    
    })
    buttonOscuro.addEventListener('click',function(){
        let midiv = document.getElementById("body");
        midiv.style.backgroundColor = 'black';
        let con = document.getElementById("contenedor_desencriptado");
        con.style.backgroundColor ='black';
        let footer = document.getElementById("datos_desarrollador");
        footer.style.color = 'white';
    })
    buttonClaro.addEventListener('click',function(){
        let midiv = document.getElementById("body");
        let con = document.getElementById("contenedor_desencriptado");
        let footer = document.getElementById("datos_desarrollador");
        con.style.backgroundColor ='white';
        midiv.style.backgroundColor = 'white';
        footer.style.color = 'black';
    })