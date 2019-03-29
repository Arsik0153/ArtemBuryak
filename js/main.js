//Tilt.js
$('.magnet__wrap').tilt({
    transition:     true,
    speed:          300,
    easing:         "cubic-bezier(.3,.98,.52,.99)",
    speed:          "1000",
    maxTilt:        12
})

//Magnetic btn
var cerchio = document.querySelectorAll('.cerchio');

cerchio.forEach(function(elem){
  $(document).on('mousemove touch', function(e){
    magnetize(elem, e);
  });
})

// $(document).on('mousemove touch', function(e){
//   magnetize('.cerchio', e);
// });

function magnetize(el, e){
  var mX = e.pageX,
      mY = e.pageY;
  const item = $(el);
  
  const customDist = item.data('dist') * 20 || 120;
  const centerX = item.offset().left + (item.width()/2);
  const centerY = item.offset().top + (item.height()/2);
  
  var deltaX = Math.floor((centerX - mX)) * -0.2;
  var deltaY = Math.floor((centerY - mY)) * -0.2;
  
  var distance = calculateDistance(item, mX, mY);
    
  if(distance < customDist){
    TweenMax.to(item, 0, { y: deltaY, x: deltaX, scale:1});
  }
  else {
    TweenMax.to(item, 0.6, {y: 0, x: 0, scale:1});
  }
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}