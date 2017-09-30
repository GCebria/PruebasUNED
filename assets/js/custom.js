function descargarGuia(){
	window.open("http://www2.uned.es/saludsexual/docs/GUIASALUDSEXUAL.pdf");
}

function descargarSolicitud(){
	window.open("http://www2.uned.es/saludsexual/docs/solicitud.pdf");
}

  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }


  var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});