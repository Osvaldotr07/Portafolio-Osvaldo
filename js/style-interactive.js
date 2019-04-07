
const $menuButton = document.getElementById('menu-button')
const $inicioNavegacion = document.getElementById('menu-navegacion')
const $contenido = document.getElementById('contenido')
//Eventos
$menuButton.addEventListener('click', () => {
	$inicioNavegacion.classList.toggle('active')
})

$inicioNavegacion.addEventListener('click', (evt) => {
	$inicioNavegacion.classList.remove('active')
})

//Se agrega dinamismo a la galeria del apartado de AboutMe

window.addEventListener('load', (evt) => {
	if($contenido.classList.contains('hide')){
		$contenido.classList.remove('hide')
	}
})
