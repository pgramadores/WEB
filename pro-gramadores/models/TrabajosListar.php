<?php

include './system/models.php';

//var_dump(Utiles::PaisIP());

$sql = new SQL();
$resultado = $sql->query("CALL spRec_Trabajos_ConsultaTrabajosDisponibles();",'',false);

echo json_encode($resultado);

?>