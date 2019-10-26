<?

$file = 'num.txt';
// Открываем файл для получения существующего содержимого
$current = file_get_contents($file);

$current = unserialize( $current );

echo json_encode( $current );