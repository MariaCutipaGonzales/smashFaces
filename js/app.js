$(function(){
	var valName = $('#name');
	var valSede = $('#sede');
	var name;
	var cont=0;
	var point=0;

	valSede.on('change',()=>{
		if (valSede.val() == "peru") {
			renderCoder(peru);
		}
		if (valSede.val() == "mexico") {
			renderCoder(mexico);
		}
	});

	function renderCoder(sede){
		cont++;
		valName.val("");
		$.each(sede, function(){
				if (cont<sede.length) {
					$('img').attr("src","img/"+valSede.val()+"/"+sede[cont].image);
					name = sede[cont].name.toLowerCase();
				}				
			});	
	}

	var newCoder = (sede)=>{
		if (sede == "peru") {
			renderCoder(peru);
		}else if (sede == "mexico") {
			renderCoder(mexico);
		}
	}

	function compareName(name,input){
		if (name == input) {
			alert("Lo hiciste bien");
			setTimeout(newCoder(valSede.val()), 1000);
			point+=5;
			$("#point").text("Puntos : "+point);
		}
		else{
			alert("Fallaste");
		}
	}	

	$("button").click(function(event){
		event.preventDefault();
		compareName(name,valName.val().toLowerCase());
	});

});