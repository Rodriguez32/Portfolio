
// Side nav //
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$(".button-collapse").sidenav();

  // parallax //
  $(document).ready(function(){
    $('.parallax').parallax();
  });
       
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });