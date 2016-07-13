<?php

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['idTrabajo'])) {
	echo 'Postulacion correcta: '.$data['idTrabajo'];
}

?>