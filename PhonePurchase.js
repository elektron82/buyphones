// Adjust these as needed to change program behavior
const TAX_RATE = .07;
const PHONE_PRICE = 400;
const ACCESSORIES_PRICE = 10;
const SPENDING_THRESHOLD = 500;

// Variables declared here, Functions at bottom
var TotalPrice;
var AccountBalance = 0;
var TotalPhonePrice;
var TotalPurchaseAmount = 0;
var OverTheLimit;
var OutOfFunds;
var TotalPhones = 0;
var TotalAccessoriesPrice;
var CombinedAccessoriesCost = 0;
var TotalAccessories = 0;
var PhoneAndAccessories;


//Figure out costs and what have in the bank
AccountBalance = prompt("Enter your Bank Account Balance");
TotalAccessoriesPrice = CalculateTax(ACCESSORIES_PRICE);
TotalPhonePrice = CalculateTax(PHONE_PRICE);

//See how many accessories we can afford
for (PhoneAndAccessories = TotalPhonePrice; PhoneAndAccessories < SPENDING_THRESHOLD;) {
	PhoneAndAccessories += TotalAccessoriesPrice;
	CombinedAccessoriesCost += TotalAccessoriesPrice;
	TotalAccessories++;
}

// Add on accessories until cost per phone limit reached
/*	while (!OverTheLimit) { 
		PurchaseAccessories();
		if (TotalPhoneCost + CombinedAccessoriesCost < SPENDING_THRESHOLD) {
			TotalPurchaseAmount += TotalAccessoriesCost;
			TotalPurchaseAmount += TotalPhoneCost;
			CombinedAccessoriesCost += TotalAccessoriesCost;
			TotalAccessories++;
		}
		else {
			OverTheLimit = 1;
			CombinedAccessoriesCost = 0;
			console.log("The total number of accessories per phone is ", TotalAccessories);
		}	
	}
*/
// See how many phones we can afford with accessories for each
while (PhoneAndAccessories < AccountBalance) {
	PhoneAndAccessories += PhoneAndAccessories;
	TotalPhones++;
}

//Show the results
PhoneAndAccessories = PhoneAndAccessories.toFixed(2);
CombinedAccessoriesCost = CombinedAccessoriesCost.toFixed(2);
alert("The Total Purchase Amount is $", PhoneAndAccessories);
alert("The total number of phones purchased is ", TotalPhones);
console.log("The total number of accessories per phone is ", TotalAccessories);
console.log("The total cost of the accessories per phone is $", CombinedAccessoriesCost);
/*
while (!OutOfFunds) {
	PurchasePhone();
	
	if (TotalPurchaseAmount < AccountBalance) {
		AccountBalance -= TotalPurchaseAmount;
		TotalPurchaseAmount = 0;
		TotalPhones++;
	}
	else {
		OutOfFunds = 1;
		TotalPurchaseAmount = TotalPurchaseAmount.toFixed(2);
		alert("The Total Purchase Amount is $", TotalPurchaseAmount);
		alert("The total number of phones purchased is ", TotalPhones);
	}	
}
*/

// Functions Declarations
function PurchasePhone() {
	TotalPhoneCost = CalculateTax(PHONE_PRICE);
}

function PurchaseAccessories () {
	TotalAccessoriesCost = CalculateTax(ACCESSORIES_PRICE);
}

function CalculateTax(ItemCost) {
TotalCost = ItemCost * TAX_RATE + ItemCost;
return TotalCost;
}