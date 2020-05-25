//BILLING DETAILS

function slideToggleForBill() {
	(document.getElementById("bill").style.display == 'none') ?
   document.getElementById("bill").style.display = 'block' : document.getElementById("bill").style.display = 'none';
}

// SHIPPING METOD

function slideToggleForShiping() {
	(document.getElementById('shipping').style.display == 'none') ?
   document.getElementById('shipping').style.display = 'block' : document.getElementById('shipping').style.display = 'none';
}

//PAYMENT METOD

function slideToggleForcredContainer() {
	(document.getElementById('cred-container').style.display == 'none') ?
  document.getElementById('cred-container').style.display = 'block' : document.getElementById('cred-container').style.display = 'none';
}
//FUNCTION CALLS

document.getElementById('button-1').addEventListener("click", slideToggleForBill);
document.getElementById('button-2').addEventListener("click", slideToggleForShiping);
document.getElementById('button-3').addEventListener("click", slideToggleForcredContainer);

//CHECK FUNCTIONS

document.getElementById('x-but-first').addEventListener("click", function(){ document.getElementById('firstGood').style.display = 'none'; });
document.getElementById('x-but-second').addEventListener("click", function(){ document.getElementById('secGood').style.display = 'none'; });
document.getElementById('x-but-third').addEventListener("click", function(){ document.getElementById('thirdGood').style.display = 'none'; });