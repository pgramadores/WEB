<?php


class Utiles{

	public static function get_client_ip_server() {
		
		if( array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER) && !empty($_SERVER['HTTP_X_FORWARDED_FOR']) ) {
	        if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',')>0) {
	            $addr = explode(",",$_SERVER['HTTP_X_FORWARDED_FOR']);
	            return trim($addr[0]);
	        } else {
	            return $_SERVER['HTTP_X_FORWARDED_FOR'];
	        }
	    }
	    else {
	        return $_SERVER['REMOTE_ADDR'];
	    }
	}



	public static function PaisIP(){

		// $ip_address = self::get_client_ip_server();

		// //var_dump($ip_address);

		// $url = "http://ip-to-country.webhosting.info/node/view/36";

		// $inici = "src=/flag/?type=2&cc2=";

		// $ch = curl_init();
		// curl_setopt($ch, CURLOPT_URL, $url);
		// curl_setopt($ch, CURLOPT_POST,"POST");
		// curl_setopt($ch, CURLOPT_POST, 1);
		// curl_setopt($ch, CURLOPT_POSTFIELDS, "ip_address = $ip_address"); 

		// ob_start();

		// curl_exec($ch);
		// curl_close($ch);
		// $cache = ob_get_contents();
		// ob_end_clean();

		// $resto = strstr($cache,$inici);
		// $pais = substr($resto,strlen($inici),2);

		// return strtolower($pais);
		$obj = json_decode(file_get_contents('http://ipinfo.io/json'), true);
		return $obj['country'];
	}
}

?>