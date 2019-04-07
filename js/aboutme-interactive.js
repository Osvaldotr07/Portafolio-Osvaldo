const $contenido = document.getElementById('contenido');

window.addEventListener('load', (evt) => {
	if($contenido.classList.contains('hide')){
		$contenido.classList.remove('hide')
	}
})
