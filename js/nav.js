(function(window){
	var services = document.getElementById("services"),
		aboutme = document.getElementById("aboutme");
		
	window.addEventListener("DOMContentLoaded", doMagic);

	function doMagic(){
		updateLayout();
		window.document.documentElement.setAttribute("class", "js");
		window.addEventListener("hashchange", updateLayout);
	}

	function updateLayout(e){
		if(window.location.hash === "#services/"){
			services.className = "show";
			aboutme.className = "hide";
			return;
		}
		services.className = "hide";
		aboutme.className = "show";
	}
}(this));