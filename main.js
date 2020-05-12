//BILLING DETAILS

function slideUp() {
		bill.style.display = 'none';
	}

function slideDown() {
		bill.style.display = 'block';
	}


function slideToggleForBill() {
	(bill.style.display == 'none') ?
   slideDown() : slideUp();
}


// SHIPPING METOD
function slideUpShip() {
		shipping.style.display = 'none';
	}

function slideDownShip() {
		shipping.style.display = 'block';
	}


function slideToggleForShiping() {
	(shipping.style.display == 'none') ?
   slideDownShip() : slideUpShip();
}

//PAYMENT METOD
function slideUpcredContainer() {
		credContainer.style.display = 'none';
	}

function slideDowncredContainer() {
		credContainer.style.display = 'block';
	}


function slideToggleForcredContainer() {
	(credContainer.style.display == 'none') ?
   slideDowncredContainer() : slideUpcredContainer();
}

const bill = document.getElementById("bill");
var shipping = document.getElementById('shipping');
var credContainer = document.getElementById('cred-container');
const btnOne = document.getElementById('button-1');
const btnTwo = document.getElementById('button-2');
const btnThree = document.getElementById('button-3');
const firstGoodContainer = document.getElementById('firstGood');
const secGoodContainer = document.getElementById('secGood');
const thirdGoodContainer = document.getElementById('thirdGood');
const closeBtnFirst = document.getElementById('x-but-first');
const closeBtnSec = document.getElementById('x-but-second');
const closeBtnThird = document.getElementById('x-but-third');




btnOne.addEventListener("click", slideToggleForBill);
btnTwo.addEventListener("click", slideToggleForShiping);
btnThree.addEventListener("click", slideToggleForcredContainer);

closeBtnFirst.addEventListener("click", function(){ firstGoodContainer.style.display = 'none'; });
closeBtnSec.addEventListener("click", function(){ secGoodContainer.style.display = 'none'; });
closeBtnThird.addEventListener("click", function(){ thirdGoodContainer.style.display = 'none'; });