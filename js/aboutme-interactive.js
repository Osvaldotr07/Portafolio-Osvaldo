const $contenido = document.getElementById('contenido');
const $menuButton = document.getElementById('menu-button')
const $inicioNavegacion = document.getElementById('menu-navegacion')

$menuButton.addEventListener('click', () => {
	$inicioNavegacion.classList.toggle('active')
})

$inicioNavegacion.addEventListener('click', (evt) => {
	$inicioNavegacion.classList.remove('active')
})

window.addEventListener('load', (evt) => {
	if($contenido.classList.contains('hide')){
		$contenido.classList.remove('hide')
	}
})
