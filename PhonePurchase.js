// Adjust these as needed to change program behavior
const TAX_RATE = .07;
const PHONE_PRICE = 400;
const ACCESSORIES_PRICE = 10;
const SPENDING_THRESHOLD = 500;

// Variables declared here, Functions at bottom
var TotalPrice;
var AccountBalance;
var TotalPhoneCost;
var TotalPurchaseAmount;
var OverTheLimit;
var OutOfFunds;
var TotalPhones;
var TotalAccessories;

AccountBalance = prompt("Enter your Bank Account Balance");
//Buy as many phones with accessories as you can
while (!OutOfFunds) {
	PurchasePhone();
	while (!OverTheLimit) { //Add on accessories until cost per phone limit reached
		PurchaseAccessories();
		if (TotalAccessoriesCost < SPENDING_THRESHOLD) {
			TotalPurchaseAmount =+ TotalAccessoriesCost;
			TotalAccessories++;
		}
		else {
			OverTheLimit = 1;
			console.log("The total number of accessories per phone is ", TotalAccessories);
		}	
	}
	if (TotalPurchaseAmount < AccountBalance) {
		AccountBalance =- TotalPurchaseAmount;
		TotalPurchaseAmount = 0;
		TotalPhones++;
	}
	else {
		OutOfFunds = $true;
		alert("The Total Purchase Amount is ", TotalPurchaseAmount, "The total number of phones purchased is ", TotalPhones);
	}	
}

// Functions Declarations
function PurchasePhone() {
	TotalPurchaseAmount =+ CalculateTotal(PHONE_PRICE);
	
}

function PurchaseAccessories () {
	TotalAccessoriesCost =+ CalculateTotal(ACCESSORIES_PRICE);
}

function CalculateTotal(ItemCost) {
TotalCost = ItemCost * TAX_RATE + ItemCost;
return TotalCost;
}