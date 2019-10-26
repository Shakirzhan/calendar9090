<?

$file = 'num.txt';

$arr_num = array();

$current = file_get_contents($file);

$current = unserialize( $current );

foreach ($current as $key => $value) {
	if ( $current[$key] == $_POST["num"] ) {
		unset( $current[$key] );
	}
}

foreach ($current as $key => $value) {
	array_push($arr_num, $value);
}

$current = serialize( $arr_num );
		
file_put_contents($file, $current);