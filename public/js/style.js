$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

var hId;

$(document).on('click','#openmodal', function(){

  var title = $(this).parent().parent().children('h3')[0].innerText;
  var location = $(this).parent().parent().children('div').children('h5')[0].innerText;
  var price2 = $(this).parent().parent().children('div')[1].innerText;
  var id = $(this).parent().children('p')[0].innerHTML;
  
  $('#hName').text(title);
  $('#hLocation').text(location);
  $('#price2').text(price2);
  $('#id').text(id);
  console.log(id);
});

$('#proceed').click(function(){
console.log('ID paisi', hId);

});
