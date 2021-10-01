var string = 'Cadenas de texto'
var number = 5 //'Numeros'
var boolean = true //o 'false',
  //Existen tres formas de declarar una variable: var, let y const.
  //var tiene un alcance global, las variables declaradas con var tienen valor en todo el código.
  //let tiene alcance limitado, las variables declaradas con let tendrán valor sólo dentro del bloque en el que se declaró. Por ejemplo dentro de un while o dentro de un if, pero no fuera de él (si se ha declarado dentro de él);
  //const es una constante. Las constantes van a tener el valor declarado al principio siempre, si se le asigna otro valor más abajo en el código no va a ser posible y va a tirar un error. (En otras palabras: la const se inicializa una sola vez, y no se puede volver a inicializar) No se puede inicializar sin declararle un valor
    //undefined es un tipo de valor que nos indica que no está definido un valor en cierta variable.
      let variable1, variable2, variable3; //Se pueden declarar numerosas variables en una sola línea, y es una buena práctica. A esto se le llama scope.
      let numero = null      //null nos indica que la variable está vacía. A diferencia de undefined, null sí está definida, y su valor es nulo.
    let nombre = prompt("Dime tu nombre") // Es una api de JS que nos permite pedir un dato al usuario. en una ventana emergente.
