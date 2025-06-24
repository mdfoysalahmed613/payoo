let PIN = "1234";
let forgotPin = document.querySelector("#forgotPin");
let login = document.querySelector("#login")

// Hide All section
function addHiddenAll(){
  addMoneySection.classList.add("hidden")
  cashOutSection.classList.add("hidden")
  transferMoneySection.classList.add("hidden")
  getBonusSection.classList.add("hidden")
  payBillSection.classList.add("hidden");
  transactionsSection.classList.add("hidden");
}
// write a funtion to get transaction
function addTransaction(heading){
  let now = new Date();
  let timenow = now.toLocaleTimeString([],{
    hour:'2-digit',
    minute:'2-digit',
    hour12:true
  })

  transactionsSection.insertAdjacentHTML("beforeend",`
    <div id="trxid" class="">
    <div class="my-3 p-4 rounded-2xl bg-white flex gap-3">
    <div class="bg-gray-200 p-3 rounded-[50%]">
    <img src="assets/addmoney.png" alt="">
    </div>
    <div>
      <h3 class="font-semibold text-gray-600 text-lg">${heading}</h3>
      <p class="text-sm">Today ${timenow}</p>
    </div>
  </div>
  </div>
    `)

}

function verifyNumber(number) {
  if (number.length !== 11) {
    alert("Enter an 11-digit number.");
    return false;
  } else if (number[0] !== '0' || number[1] !== '1') {
    alert("Number must start with 01...");
    return false;
  } else {
    return true;
  }
}
function verifyPin(pin){
  if (pin.length !== 4){
    alert("Enter 4 Digit Pin")
    return false;
  }
  else if (pin !== PIN){
    alert("Pin is Incorrect")
    return false;
  }
  else{
    return true;
  }
}
// Login
login.addEventListener("click",(e)=>{
  e.preventDefault()
  let number = document.querySelector(".number").value;
  let pin = document.querySelector(".pin").value;
  if (verifyNumber(number)) {
    if (verifyPin(pin)){
      location.href="./main.html"
    }
  }
})
forgotPin.addEventListener("click",()=>alert("Contact with Foysal. Whatsapp-01687069581"))