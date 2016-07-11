<?php

include '/MySqli/class.db.php';
include '/PHPMailer/class.phpmailer.php';
include '/phpmailer/class.smtp.php';
include '/Utiles/class.utiles.php';

class SQL{

	private $IdInsertado;
	private $datos;
	private $Cantidad;

	public function __get($property){
        if (property_exists($this, $property)){
            return $this->$property;
        }
    }
 
    public function __set($property, $value){
        if (property_exists($this, $property)){
            $this->$property = $value;
        }
    }

	public function query($sql,$parametros,$cierre){
		$database = new Database();
		$database->sql = $sql;
		$database->parametros = $parametros;
		$database->cierre = $cierre;
		$this->datos = $database->query($cierre);
		$this->IdInsertado = $database->Insert_Id;
		$this->Cantidad = $database->Cantidad;
		return $this->datos;
	}
}


class Correo{
	

	public function EnviarCorreo($value='')
	{
		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->SMTPDebug = 2;
		$mail->Debugoutput = 'html';
		$mail->Host = "mail.raicerk.cl";
		$mail->Port = 587;
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = 'ssl'; 
		$mail->Username = "jvmora@raicerk.cl";
		$mail->Password = "r042581796r";
		$mail->addAddress('raicerk@outlook.com', 'Juan Mora');
		$mail->Subject = 'PHPMailer SMTP test';
		$mail->msgHTML("test de <h1>html</h1>");

		if (!$mail->send()) {
		    echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
		    echo "Message sent!";
		}
	}
}

?>