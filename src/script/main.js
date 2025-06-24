let mainBalance = parseInt(document.querySelector("#mainBalance").innerText);

let addMoneyBtn = document.querySelector("#addMoneyBtn")
let addMoneyHero = document.querySelector("#addMoneyHero")
let addMoneySection = document.querySelector("#addMoneySection")

let cashOutHero = document.querySelector("#cashOutHero")
let cashOutSection = document.querySelector("#cashOutSection")
let cashOutBtn = document.querySelector("#cashOutBtn")

let transferMoneyHero = document.querySelector("#transferMoneyHero")
let transferMoneySection = document.querySelector("#transferMoneySection")
let transferMoneyBtn = document.querySelector("#transactionsBtn")

let getBonusHero = document.querySelector("#getBonusHero")
let getBonusSection = document.querySelector("#getBonusSection")
let getBonusBtn = document.querySelector("#getBonusBtn")

let payBillHero = document.querySelector("#payBillHero");
let payBillSection = document.querySelector("#payBillSection");
let payBillBtn = document.querySelector("#payBillBtn");

let transactionsHero = document.querySelector("#transactionsHero")
let transactionsSection = document.querySelector("#transactionsSection")
let trxid = document.querySelector("#trxid")
let logout = document.querySelector("#logout")

// Hero section (Toggle menu)
addMoneyHero.addEventListener("click",()=>{
  addHiddenAll()
  addMoneySection.classList.remove("hidden");
})
cashOutHero.addEventListener("click",()=>{
  addHiddenAll()
  cashOutSection.classList.remove("hidden");
})
transferMoneyHero.addEventListener("click",()=>{
  addHiddenAll()
  transferMoneySection.classList.remove("hidden");
})
getBonusHero.addEventListener("click",()=>{
  addHiddenAll()
  getBonusSection.classList.remove("hidden");
})
payBillHero.addEventListener("click",()=>{
  addHiddenAll()
  payBillSection.classList.remove("hidden");
})
transactionsHero.addEventListener("click",()=>{
  addHiddenAll()
  transactionsSection.classList.remove("hidden")

  
})
// Add Money section
addMoneyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const pin = document.querySelector(".pin").value.trim();
  const number = document.querySelector(".number").value.trim();
  const addMoneyAmount = parseInt(document.querySelector("#addMoneyAmount").value);
  // Validate number
  if (!verifyNumber(number)){
    return;
  } 
  // Validate pin
  if (!verifyPin(pin)) return;
  // Validate amount
  if (isNaN(addMoneyAmount)) {
    alert("Please enter a valid amount.");
    return;
  }
  if (addMoneyAmount > 10000) {
    alert("You can't add more than 10,000 at once.");
    return;
  }
  if (addMoneyAmount <= 0) {
    alert("You can't add less than 1.");
    return;
  }
  // Proceed if all validation passed
  mainBalance += addMoneyAmount;
  document.querySelector("#mainBalance").innerText = mainBalance;
  alert("Add Money Successful");
  addTransaction("Deposite Money")
  document.querySelector("#addMoneySection form").reset();
});

// CashOut Section
cashOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const pin = document.querySelector("#cashOutSection .pin").value.trim();
  const number = document.querySelector("#cashOutSection .number").value.trim();
  const withdrawAmount = parseInt(document.querySelector("#withdrawAmount").value);
  // Validate number
  if (!verifyNumber(number)){
    return;
  } 
  // Validate pin
  if (!verifyPin(pin)) return;
  // Validate amount
  if (isNaN(withdrawAmount)) {
    alert("Please enter a valid amount.");
    return;
  }
  if (withdrawAmount > 10000) {
    alert("You can't withdraw more than 10,000 at once.");
    return;
  }
  if (withdrawAmount <= 0) {
    alert("You can't withdraw less than 1.");
    return;
  }

  mainBalance -= withdrawAmount;
  document.querySelector("#mainBalance").innerText = mainBalance;
  alert("Withdraw Money Successful");
  addTransaction("Cash Out")
  document.querySelector("#cashOutSection form").reset();
});

// Transfer Money Section
transferMoneyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const pin = document.querySelector("#transferMoneySection .pin").value.trim();
  const number = document.querySelector("#transferMoneySection .number").value.trim();
  const transferAmount = parseInt(document.querySelector("#transferAmount").value);
  // Validate number
  if (!verifyNumber(number)) return;
  // Validate pin
  if (!verifyPin(pin)) return;
  // Validate amount
  if (isNaN(transferAmount)) {
    alert("Please Enter a valid Amount.");
    return;
  }
  if (transferAmount > mainBalance) {
    alert("You can't transfer more than Main Balance");
    return;
  }
  if (transferAmount <= 0) {
    alert("You can't transfer less than 1.");
    return;
  }
  // Proceed if all validation passed
  mainBalance -= transferAmount;
  document.querySelector("#mainBalance").innerText = mainBalance;
  alert("Transfer Money Successful");
  addTransaction("Transfer Money")
  document.querySelector("#transferMoneySection form").reset();
});

// Get Bonus Section
getBonusBtn.addEventListener("click",(e)=>{
  e.preventDefault()

  const coupon = document.querySelector("#coupon").value.trim();
  if (coupon != "foysal613"){
    alert("Please Enter a valid Coupon");
    return;
  }
  mainBalance += 100;
  document.querySelector("#mainBalance").innerText = mainBalance;
  alert("Congratulation. You got 100$ Bonus!!!!!")
  addTransaction("Coupon Applied")
})

// Pay Bill Section
payBillBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const pin = document.querySelector("#payBillSection .pin").value.trim();
  const number = document.querySelector("#payBillSection .number").value.trim();
  const payAmount = parseInt(document.querySelector("#payAmount").value);
  // Validate number
  if (!verifyNumber(number)) return; 
  // Validate pin
  if (!verifyPin(pin)) return;
  // Validate amount
  if (isNaN(payAmount)) {
    alert("Please enter a valid amount.");
    return;
  }
  if (payAmount > mainBalance) {
    alert("You can't Pay more than Main Balance");
    return;
  }
  if (payAmount <= 0) {
    alert("You can't Pay less than 1.");
    return;
  }
  // Proceed if all validation passed
  mainBalance -= payAmount;
  document.querySelector("#mainBalance").innerText = mainBalance;
  alert("Pay Bill Successful");
  addTransaction("Bill Pay")
  document.querySelector("#payBillSection form").reset();

});




// Logout button
logout.addEventListener("click",()=>location.href = "./index.html")

