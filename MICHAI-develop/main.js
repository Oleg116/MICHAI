//BILLING DETAILS

function slideToggleForBill(metod1, metod2, metod3) {
	metod1 = (document.getElementById("bill").style.display == 'none') ?
   document.getElementById("bill").style.display = 'block' : document.getElementById("bill").style.display = 'none';
   metod2=(document.getElementById('shipping').style.display == 'none') ?
   document.getElementById('shipping').style.display = 'block' : document.getElementById('shipping').style.display = 'none';
   metod3.(document.getElementById('cred-container').style.display == 'none') ?
  document.getElementById('cred-container').style.display = 'block' : document.getElementById('cred-container').style.display = 'none';
}

// SHIPPING METOD


//PAYMENT METOD

//FUNCTION CALLS

document.getElementById('button-1').addEventListener("click", slideToggleForBill.metod1);
document.getElementById('button-2').addEventListener("click", this.metod2);
document.getElementById('button-3').addEventListener("click", slideToggleForBill.metod3);

//CHECK FUNCTIONS

document.getElementById('x-but-first').addEventListener("click", function() { document.getElementById('firstGood').style.display = 'none'; });
document.getElementById('x-but-second').addEventListener("click", function() { document.getElementById('secGood').style.display = 'none'; });
document.getElementById('x-but-third').addEventListener("click", function() { document.getElementById('thirdGood').style.display = 'none'; });