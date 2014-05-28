<?
$urls = file('urls.txt');

foreach($urls as $key=>$x)
{
	//if( (bool)preg_match_all("~\t~", $x, $matched) )
	$parts = explode("\t", $x);
//	print_r($parts);
	if( count($parts) === 2 ){
		$out = array('name'=>$parts[0], 'id'=>trim($parts[1]));
	}
	else { $out = array('name'=>'???', 'id'=>$parts[0]); }
	
	$urls[$key] = $out;
}

echo json_encode($urls);