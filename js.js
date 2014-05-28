window.app = {};

$(document).ready(function(){

x = $.ajax('urls.txt').done( function(){ doStuff(x); } )

function doStuff(x){ 
//console.log(x); 
var items = JSON.parse(x.responseText);
window.app.items = items;
//console.log( items ); 
	for( i in items )
	{ 
		var anchor = $('<a>').attr('href','#' + items[i].id).html(items[i].name);
		$('.nav').append( anchor );
	}
	
	$('.nav a').click( loadVideo );
}


function loadVideo(click){
	click.preventDefault();
	console.log(click.target);
	var vid = $(click.target).attr('href').replace('#','');
	
	var found = findVid( vid );

	if( found )
	{
		$('.vid-name').text(found.name); 
		$('.vid-id').text(found.id);
		var url = $('.vid-frame').attr('src');
		url = url.replace(/embed\/(.+)?rel/,"embed/"+found.id+"?rel")
		$('.vid-frame').attr('src', url);
	}
	console.log(url);

}

function findVid( needle )
{
	var list = window.app.items; 
	for (i in list )
	{
		if( list[i].id == needle){ return list[i]; }
	}
	return false;
}

});





