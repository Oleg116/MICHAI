//BILLING DETAILS

function slider() {
	(document.getElementById("bill").style.display == 'none') ?
   document.getElementById("bill").style.display = 'block' : document.getElementById("bill").style.display = 'none';
}
	function slider2() {
		(document.getElementById('cred-container').style.display == 'none') ?
  document.getElementById('cred-container').style.display = 'block' : document.getElementById('cred-container').style.display = 'none';
}

	function slider1() {
		(document.getElementById('shipping').style.display == 'none') ?
   document.getElementById('shipping').style.display = 'block' : document.getElementById('shipping').style.display = 'none';
}


document.getElementById('x-but-first').addEventListener("click", function(){ document.getElementById('firstGood').style.display = 'none'; });
document.getElementById('x-but-second').addEventListener("click", function(){ document.getElementById('secGood').style.display = 'none'; });
document.getElementById('x-but-third').addEventListener("click", function(){ document.getElementById('thirdGood').style.display = 'none'; });