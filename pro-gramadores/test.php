<?php


include 'system/ModelClass.php';

$sql = new DataMySql();
$resultado = $sql->query("CALL spRec_Trabajos_ConsultaTrabajosDisponibles();",'',false);

echo json_encode($resultado);


?>