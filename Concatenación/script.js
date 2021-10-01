//La concatencación es básicamente unir strings. Para concatenar, unimos dos cadenas de texto. Por ejemplo:
var saludo = '¡Hola pedro!';
var pregunta = '¿Cómo estás?';

frase = saludo + pregunta; //Esto sería una concatenación.

document.write(frase);
//Por otro lado, para concatenar números sin sumarlos la manera sería la siguiente:
numero1 = 5;
numero2 = 8;

phass = '' + numero1 + numero2; //En este caso se concatena añadiendo comillas dobles o simples al principio para que detecte texto y concatene en lugar de sumar.
document.write(phass);
  //Concat: Es un método de cadena para concatenar que sólo funciona con strings. Al menos una de las variables debe ser un string para que funcione.
  num1 = "55";
  num2 = "8";
    //Ejemplo:
      conct = num1.concat(num2);
      document.write(conct);
//Otra manera de concatenar es mediante ${}
nombre = 'Diego Guapo '
frase2 = ` soy ${nombre} y estoy caminando`; //Deben utilizarse las comillas ` para concatenar dentro de la cadena con ${} Con estas mismas comillas se pueden escribir cadenas en varias líneas, o incluse escribir dentro de ellas código html que funcione en la página.
document.write(frase2);

//
