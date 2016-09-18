<?php

include './system/models.php';

$recibe = json_decode(file_get_contents('php://input'), true);

$img = $recibe['Imagen']; // Your data 'data:image/png;base64,AAAFBfj42Pj4';
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$convertida = base64_decode($img);

$imagen = '../images/trabajos/'.str_replace(' ','',$recibe['Publicador']).'_'.date("YmdHis").'.png';
file_put_contents($imagen, $convertida);

$sql = new SQL();

$data = array('sssisssssss',
	isset($recibe["Cargo"]) ? $recibe["Cargo"]:'',
	isset($recibe["Publicador"]) ? $recibe["Publicador"]:'',
	isset($recibe["Categoria"]) ? $recibe["Categoria"]:'',
	isset($recibe["Renta"]) ? $recibe["Renta"]:'',
	isset($recibe["TipoContrato"]) ? $recibe["TipoContrato"]:'',
	isset($recibe["DescripcionGeneral"]) ? $recibe["DescripcionGeneral"]:'',
	isset($recibe["BeneficiosVentajas"]) ? $recibe["BeneficiosVentajas"]:'',
	isset($recibe["Requisitos"]) ? $recibe["Requisitos"]:'',
	'CL',
	isset($imagen) ? $imagen:'',
	'2016-08-15'
	);



	$sql->query("CALL spIns_Trabajos_CreaOfertaTrabajo(?,?,?,?,?,?,?,?,?,?,?);",$data,True);


$datos = array(
				'IdInsertado' => $sql->IdInsertado,
				'CantidadAfectada' => $sql->CantidadRegistros
			);

echo json_encode($datos);

?>
