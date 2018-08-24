var nombre_1 = document.getElementById("nombre_1");
var nombre_2 = document.getElementById("nombre_2");
var result = document.getElementById("result");

function additionner(){
  document.getElementById('result').innerHTML = parseInt(nombre_1.value) + parseInt(nombre_2.value);
}

function multiplier(){
  document.getElementById('result').innerHTML = nombre_1.value * nombre_2.value;
}

function soustraire(){
  document.getElementById('result').innerHTML = nombre_1.value - nombre_2.value;
}

function diviser(){
  document.getElementById('result').innerHTML = nombre_1.value / nombre_2.value;
}
