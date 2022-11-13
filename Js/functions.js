// las funciones deben tener un parentesis junto al nombre

function operacionesBasicas(){
  var A
  var B 
  var SUMA;
  var RESTA;
  var DIVISION;
  var MULTIPLICACION;
  A = parseInt(prompt("Ingrese  el primer valor"));
  B = parseInt(prompt("Ingrese el segundo valor"));

  SUMA = A + B;
  RESTA = A - B;
  DIV = A / B;
  MULT = A * B

  alert("La suma total es:"  + SUMA +"La resta es:" + RESTA+ "La divisiones:"+ DIV + "La Multiplicacion es:" + MULT);
}

function cuadradoNumero(){
  var A = 0;
  var c = 0;
  A = parseInt(prompt("ingrese el numero a validar"));
  C = A *A;
  alert("el cuadrado del numero ingresado es:" +C);
}

function areaTriangulo(){
  var A = 0;
  var c = 0;
  A = parseInt(prompt("ingrese el numero a validar"));
  C = parseInt(prompt("ingrese el numero a validar"));
  C = A * C / 2;
  alert("el area de un triangulo es:" +C);
}
function conversionUnidades(){
  
      var P;
      var C;
      var K;
      
      P = parseInt(prompt("ingrese pulgadas"));
      C = P * 2.54
      K = P * (1 / 39.370) * (1 / 1000);
      alert("las pulgadas en centimetros es" + C);
      alert("las pulgadas en kilometros es" + K);
  
  
  
}
function servicioMilitar(){
alert ("Algortimo para saber si soy apto para prestar el servicio militar obligatorio ");
var Edad = parseInt(prompt("porfavor ingrese su edad"));
var Genero = prompt("por favor ingresar Masculino o Femenino");

if (Genero == "Femenino"){
  alert("No eres apta para el smo")

}else{
  if (Edad>17 && Edad<25){
      alert ("Eeres apto para presentar el servicio militar")
  }else{
      alert("No eres apto por edad")
    
  }
}

}
function AñoNacimiento(){

      var A = 0;
      var E = 0 ;
      var Aa = 2022;

      
      
      E = parseInt(prompt("Ingrese  Su edad"));         
             RESTA = E - 2022;                  
      alert("La suma total es:"  + RESTA);
}
function Promediop(){
 var N1;
 var N2;
 var N3;
 Promedio (N1+N2+N3)/3;
 N1 = parseInt(prompt("Ingresa La Nota"));
 alert("La Nota Es" + promedio);
 N2 = parseInt(prompt("Ingresa La Nota"));
 alert("La Nota Es" + promedio);
 N3 = parseInt(prompt("Ingresa La Nota"));
 alert("La Nota Es" + promedio);


}
function inversonCapital(){


  C = 0;
  G = 0;
  MULT = 0;
  
  C = parseInt(prompt("Ingrese Cantidad"));
  
  Total = 0.8 * C;
  G = Total * 12;
  
  
  alert("Su GANANCIA Mensual de el dinero Invertido Es " + Total);
  alert("la Cantidad invertida Es De" + C );
  alert("Sucantidad Invertida Con Capoital Es "  , (Total + C) );
  alert("la Cantidad Ganancias Anuales Son" , (G + C) );
  
  }
function ventaDescuento(){
    var Kilos;
    var div;
    var div2;
    var div3;
   
 
    alert("algoritmo para saber cuanto descuento recibe")

    var Kilos = parseInt(prompt("ingrese numero de kilos"))
    div = (10/100)*4500;
    
    div2 =(15/100)*4500;
    
    div3 =(20/100)*4500;
    
    if (Kilos <3){
        alert("no se le da descuento");
    }else{
        if(Kilos >2 && Kilos <6){
            alert("Recibe un descuento de 10% a su compra se le descuanta: " + div);
        }if(Kilos >5 && Kilos <11){
            alert("Recibe un descuento de 15% a su compra se le descuanta: " + div2);
        }if(Kilos>10){
            alert("recibe un descuento de 20% a su compra se le descuanta: " + div3)
        }

    }

 }

function cantidadDigitosNumero(){
  num = 0;
  total=0;
  num = parseInt(prompt("Ingrese Los Numeros"))
  while(num>=1){
    num =num/10
    total = total + 1
  }
  alert("los numeros que se ingresaron son: " + total);
} 
function salarioSemanal(){
  var horas;
  var Hora;
  var horaextra;


  alert("Algoritmo para saber cuanto se le paga a la semana a un obrero")
  var horas = parseInt(prompt("ingrese horas trabajadas"))
  Hora = horas*10000;
  horaextra = (horas*20000)-400000;
 

  if(horas <41){
      alert("su paga por las horas trabajadas es : " + Hora );
  }else{
      if(horaextra>40){
          alert("su paga con horas extra es: " + horaextra);
      }
  }

}
