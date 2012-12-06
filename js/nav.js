(function(window){
	var services = document.getElementById("services"),
		aboutme = document.getElementById("aboutme");
		//orient = document.getElementById("orient"),
		//oldGamma = 0;
	
	

	window.addEventListener("DOMContentLoaded", doMagic);
	//window.addEventListener("deviceorientation", handleOrientation, true);
	
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
	/*
	function handleOrientation(e){
		var newGamma = Math.floor(e.gamma);
		if(newGamma && (newGamma !== oldGamma)){
			orient.style.webkitTransform = "rotate("+orientationDiff+"deg)";
		}
		oldGamma = newGamma;
	}
	*/
}(this));