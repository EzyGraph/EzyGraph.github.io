let myResult = document.getElementById("result");

function calcNotas() {
	let form = document.getElementById('tabNotas');
	let nota1 = form.elements.n1.value;
	let nota2 = form.elements.n2.value;

	let media = (nota1 * 0.6) + (nota2 * 0.4);

	let infoAproved= 'padding: 20px; font-size: 50px; text-align: center; color: #FFFFFFFF; background-color: #00990099; background-image: url("./img/mark.png"); visibility: visible; background-repeat: no-repeat; background-position: 50% 80%; background-size: 100px;';

	let infoAlert = 'padding: 20px; font-size: 20px; color: #FFFFFFFF; background-color: #ff632999; font-style: oblique; font-weight: bold; background-image: url("./img/warning.png"); visibility: visible; background-repeat: no-repeat; background-position: 50% 80%; background-size: 100px;';

	let infoFailed = 'padding: 20px; font-size: 50px; text-align: center; color: #FFFFFFFF; background-color: #CC000099; background-image: url("./img/cancel.png"); visibility: visible; background-repeat: no-repeat; background-position: 50% 80%; background-size: 100px;';

	if ((nota1.trim() === '') && (nota2.trim() === '')){
		myResult.innerHTML = `Por favor, digite algum valor <br>de 0 a 10 nos campos acima.<br> O resultado será exibido aqui.`;
		myResult.setAttribute('style', infoAlert);
	}else if (isNaN(media)){
		myResult.innerHTML = `Por favor, insira apenas números.<br> Caso a nota contenha casas decimais,<br> separe usando ponto ( . )`;
		myResult.setAttribute('style', infoAlert);
	}else if (nota1 >10 || nota2 > 10){
		myResult.innerHTML = `Algo não está certo... <br> O nota máxima para cada campo é 10. <br>Tente novamente!`;
		myResult.setAttribute('style', infoAlert);
	}else if (media >= 5){
		myResult.innerHTML = `Média Final: <strong>${media.toFixed(2)} </strong><br>`;
		myResult.setAttribute('style', infoAproved);
		}else{
	 	    myResult.innerHTML = `Média Final: <strong>${media.toFixed(2)} </strong><br>`;
		    myResult.setAttribute('style', infoFailed);
		}
}

function resetForm() {
	myResult.style.visibility = 'hidden';
	myResult.innerHTML = '';
}
