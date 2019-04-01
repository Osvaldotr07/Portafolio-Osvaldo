
const $menuButton = document.getElementById('menu-button')
const $inicioNavegacion = document.getElementById('menu-navegacion')

//Eventos
$menuButton.addEventListener('click', () => {
	$inicioNavegacion.classList.toggle('active')
})

$inicioNavegacion.addEventListener('click', (evt) => {
	$inicioNavegacion.classList.remove('active')
})
