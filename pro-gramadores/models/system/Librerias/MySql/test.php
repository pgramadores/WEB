<?php


include 'sistema/class.controlador.php';
$funciones = new SQL();
$data = array('i', '1');
$sql = "select * from Trabajos where idTrabajos = ?";
$resultado = $funciones->query($sql, $data, false);
foreach ($resultado as $campo) {
    echo $campo['idTrabajos'];
    echo $campo['Cargo'];
}

echo "hola";


?>