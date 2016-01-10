//Espacio de nombres global (Object{})
var unJsPorDia=(function(window,undefined){
	//Funcion que codifica una cadena
	//ascii a una cadena hexadecimal
	//recibe como argumento el texto
	function encodeAsciiToHex(text){
		//Cadena hexadecimal
		hex="";
		//Recorremos caracter por caracter
		//el text
		for(index in text)
			//Obtenemos el codigo hexadecimal
			//Correspondiente para el caracter
			//actual y lo concatenamos con la
			//cadena hexadecimal
			hex+=text[index].charCodeAt().toString(16);
		//Al terminar el ciclo 
		//se retorna la cadena codificada
		return hex;
	}
	//Funcion que decodifica una cadena hexadecimal
	//a una cadena ascii, recibe como argumento
	//la cadena hexadecimal
	function decodeHexToAscii(hex){
		//cadena ascii
		text="";
		//Array que contendra todos los 
		//codigos ascii encontrados en
		//la cadena, ej:
			//Si hex='414243'
			//Entonces c16=['41','42','43']
		c16=hex.match(/[\da-fA-F]{2}/g);
		//Recorremos el array c16
		for(index in c16)
			//Obtenemos el caracter ascii correspondiente
			//para el codigo hexadecimal actual
			text+=String.fromCharCode(parseInt(c16[index],16));
		//Al terminar el ciclo 
		//se retorna la cadena 
		//decodificada
		return text;
	}
	//API publica de nuestra
	//Biblioteca (Object{})
	//============================
	//Es decir, que lo que se retorne
	//es lo unico a lo que se podra
	//acceder desde fuera usando
	//nuestro namespace global
	//como por ejemplo:
		//unJsPorDia.propiedad o
		//unJsPorDia.metodo
	return{
		"encodeAsciiToHex":encodeAsciiToHex,
		"decodeHexToAscii":decodeHexToAscii
	}
})(window);

//Registramos el evento load para el objeto window
//en otras palabras, nos aseguramos que antes de ejecutar
//cualquier otra instruccion, la pagina web cargue completamente.
window.addEventListener("load",function(){
	//Guardamos referencias a los Objetos del DOM 
	//que tengan como ID los valores encode y decode
	//respectivamente
	var encode=document.getElementById('encode');
	var decode=document.getElementById('decode');
	
	//Registramos el evento click al objeto encode
	//es decir, que cuando se haga click en el elemento
	//con ID igual a encode se ejecutara la funcion callback
	encode.addEventListener("click",function(){//Funcion callback
		//Guardamos referencia del Objeto que en el DOM 
		//tiene como ID el valor data
		var data=document.getElementById('data').value;
		//Llamamos la funcion que codifica nuestra 
		//cadena ascii a cadena hexadecimal
		//y lo que retorne lo ponemos en el
		//value del elemento
		//con id igual a 
		//result
		document.getElementById('result').value=unJsPorDia.encodeAsciiToHex(data);
	});

	//Registramos el evento click al objeto decode
	//es decir, que cuando se haga click en el elemento
	//con ID igual a decode se ejecutara la funcion callback
	decode.addEventListener("click",function(){
		//Guardamos referencia del Objeto que en el DOM 
		//tiene como ID el valor data
		var data=document.getElementById('data').value;
		//Llamamos la funcion que decodifica nuestra 
		//cadena hexadecimal a cadena ascii
		//y lo que retorne lo ponemos en el
		//value del elemento
		//con id igual a 
		//result
		document.getElementById('result').value=unJsPorDia.decodeHexToAscii(data);
	});
});
