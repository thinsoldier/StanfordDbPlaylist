<style>
html, body {margin:0; padding:0;}
iframe {  min-height: 300px; width: 100%; }
body { display:flex; flex-wrap: wrap;}
.vid { width: 25%; }
.nav { width: 100%; }
</style>

<?

$urls = file('urls.txt');


foreach($urls as $key=>$x)
{
	//if( (bool)preg_match_all("~\t~", $x, $matched) )
	$parts = explode("\t", $x);
//	print_r($parts);
	if( count($parts) === 2 ){
		$out = array('name'=>$parts[0], 'id'=>$parts[1]);
	}
	else { $out = array('name'=>'???', 'id'=>$parts[0]); }
	
	$urls[$key] = $out;
}

$chunks = array_chunk($urls, 12, true);



function showChunk( $urls ) {
foreach($urls as $videoItem)
{
echo '<div class="vid">';
echo $videoItem['name'].'&nbsp;&nbsp;&nbsp;'.$videoItem['id'].'<br><iframe src="//www.youtube.com/embed/'.$videoItem['id'].'?rel=0&amp;modestbranding=1&amp;controls=1&amp;autohide=1&amp;showinfo=1" allowfullscreen="" frameborder="0"></iframe>';
echo"</div>";
}
}

$chunky = 0;
if( isset($_GET['page'])){ $chunky = (int) $_GET['page'];}
?>


<div class="nav">
<form>
<input type="number" name="page" value="<?=$chunky?>"><input type="submit">
</form>
</div>

<? showChunk($chunks[ $chunky ]); ?>