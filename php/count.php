<?

$file = 'num.txt';
// Открываем файл для получения существующего содержимого
$current = file_get_contents($file);

$current = unserialize( $current );

$arr = [];

foreach ($current as $k => $v) {
	if ( $current[$k] != "null" ) {
		array_push($arr, $current[$k]);
	}
}

$count = count( $arr );

echo $count;