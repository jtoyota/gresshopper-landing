$('#linkContact').on('click', function(){
	$('.contact').css('display','block');
});

$('#linkAbout').on('click', function(){
	$('.about').css('display','block');
});

$('.closeModal').on('click', function(){
	$('.overlay').hide();
});