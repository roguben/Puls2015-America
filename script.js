var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();


function mostrarOcultarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost() {
	var url = $url.val(),
		titulo = $titulo.val();
		clone = $post.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();

	$list.prepend(clone);
	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	clone.slideDown();
	return false;
}

//Eventos
//$button.click(mostrarOcultarFormulario);

//$form.on('submit', agregarPost);

$('#publicar_nav a').click(mostrarOcultarFormulario);
$('#formulario').on('submit', agregarPost);