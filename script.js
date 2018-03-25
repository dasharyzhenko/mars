$(document).ready(function(){
      $('.parallax').parallax();
    });
	
function parallax(){
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	prlx_lyr_1.style.top = -(window.pageYOffset * 2)+'px';
	
}
window.addEventListener("scroll", parallax, false);


