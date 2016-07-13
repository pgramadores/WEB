<?php

#include 'system/ModelClass.php';
#$sql = new DataMySql();
#$resultado = $sql->query("CALL spRec_Trabajos_ConsultaTrabajosDisponibles();",'',false);
#echo json_encode($resultado);


include 'abstraccionMysql/sistema/class.controlador.php';
$funciones = new Funciones();
#$data = array('i', '1');
$sql = "CALL spRec_Trabajos_ConsultaTrabajosDisponibles()";
$resultado = $funciones->query($sql, '', false);
foreach ($resultado as $campo) {
    echo $campo['idTrabajos'];
    echo $campo['Cargo'];
}


?>