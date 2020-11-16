function avaliar (esfera) {
	var url = window.location;
	url = url.toString()
	url = url.split("index.html");
	url = url[0];

	var es1 = document.getElementById("es1").src;
	var es2 = document.getElementById("es2").src;
	var es3 = document.getElementById("es3").src;
	var es4 = document.getElementById("es4").src;
	var es5 = document.getElementById("es5").src;
	var avaliacao = 0;

	//5 esferas

	if (esfera == 5){
		if(es5 == url + "img/esfera.png"){
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera2.png";
			document.getElementById("es3").src = "img/esfera3.png";
			document.getElementById("es4").src = "img/esfera4.png";
			document.getElementById("es5").src = "img/esfera5.png";

			avaliacao = 5;

		}else{
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera2.png";
			document.getElementById("es3").src = "img/esfera3.png";
			document.getElementById("es4").src = "img/esfera4.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 4;

		}
	// 4  esferas

	}else if(esfera == 4){
		if (es4 == url + "img/esfera.png"){
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera2.png";
			document.getElementById("es3").src = "img/esfera3.png";
			document.getElementById("es4").src = "img/esfera4.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 4;
		}else{
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera2.png";
			document.getElementById("es3").src = "img/esfera3.png";
			document.getElementById("es4").src = "img/esfera.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 3;
		}
	//3  esferas

	}else if(esfera == 3){
		if(es3 == url + "img/esfera.png"){
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera2.png";
			document.getElementById("es3").src = "img/esfera3.png";
			document.getElementById("es4").src = "img/esfera.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 3;
		}else{
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera2.png";
			document.getElementById("es3").src = "img/esfera.png";
			document.getElementById("es4").src = "img/esfera.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 2;
		}
	//2 esfera

	}else if( esfera == 2){
		if(es2 == url + "img/esfera.png"){
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera2.png";
			document.getElementById("es3").src = "img/esfera.png";
			document.getElementById("es4").src = "img/esfera.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 2;
		}else{
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera.png";
			document.getElementById("es3").src = "img/esfera.png";
			document.getElementById("es4").src = "img/esfera.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 1;
		}
	//1 esfera

	}else {
		if( es1 == url + "img/esfera.png"){
			document.getElementById("es1").src = "img/esfera1.png";
			document.getElementById("es2").src = "img/esfera.png";
			document.getElementById("es3").src = "img/esfera.png";
			document.getElementById("es4").src = "img/esfera.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 1; 
		}else{
			document.getElementById("es1").src = "img/esfera.png";
			document.getElementById("es2").src = "img/esfera.png";
			document.getElementById("es3").src = "img/esfera.png";
			document.getElementById("es4").src = "img/esfera.png";
			document.getElementById("es5").src = "img/esfera.png";

			avaliacao = 0;
		}
	}

	document.getElementById("rating").innerHTML = avaliacao;
}