<?php


include 'system/MySqli/class.db.php';

$sql = new SQL();
$resultado = $sql->query("CALL spRec_Trabajos_ConsultaTrabajosDisponibles();",'',false);

echo json_encode($resultado);


?>