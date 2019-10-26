<?

$arr_num = array();
$boolean = true;

$file = 'num.txt';
// Открываем файл для получения существующего содержимого
$current = file_get_contents($file);
// Пишем содержимое обратно в файл

if ( empty($current) ) {
	array_push( $arr_num, $_POST["num"] );
	$arr_num = serialize( $arr_num );
	$current = $arr_num;
	file_put_contents($file, $current);
} else {
	$current = unserialize( $current );
	for ($i = 0; $i < count( $current ); $i++) { 
		if ( $current[$i] == $_POST["num"] ) {
			$boolean = false;
		}
	}
	if ( $boolean ) {
		array_push( $current, $_POST["num"] );	
		$current = serialize( $current );
		file_put_contents($file, $current);
	}
}