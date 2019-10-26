<?

$file = 'num.txt';

$current = file_get_contents($file);

$current = unserialize( $current );

for ($i = 0; $i < count( $current ); $i++) { 
	if ( $current[$i] == $_POST["num"] ) {
		unset( $current[$i] );	
	}
}

echo "<pre>";

print_r( $current );

echo "</pre>";