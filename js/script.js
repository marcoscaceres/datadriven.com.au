/* Author:

*/

window.addEventListener("DOMContentLoaded", 
function loaded(){
	
	switch(window.location.pathname){
		case "/standards/": 
			hideSpecDescriptions();
			break;
	}
	
	function hideSpecDescriptions(){
		var divs = $(".specs").find("div"), 
		    dds  = divs.find("dd");
		dds.hide();
		divs.on("click", 
			function(){
				$(this).find("dd").slideToggle();	
			}
		); 
		
	}
}
, false); 