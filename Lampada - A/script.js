let $ligar = document.getElementById("Ligar");
let $desligar = document.getElementById("Desligar");
let $lamp = document.getElementById("Lamp");

$ligar.addEventListener("click", ligar);
$desligar.addEventListener("click", desligar);
$lamp.addEventListener("dblclick", quebrar);
$lamp.addEventListener("mouseover", ligar);
$lamp.addEventListener("mouseout", desligar);

function ligar(){
    $lamp.src="img/lamp_acesa.jpg";
}

function desligar(){
    $lamp.src="img/lamp_apagada.jpg";
}

function quebrar(){
    $lamp.src="img/lamp_quebrada.jpg"
}