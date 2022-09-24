console.log("deposite");




document.getElementById("btn-dep").addEventListener("click" , function(){
    let inputDep = document.getElementById("input-dep");
let inputDepValue = inputDep.value ;
let inputDepValueInt = parseFloat(inputDepValue)
let amountDep = document.getElementById("dep-amount");
let amountDepValue = amountDep.innerText ;
let amountDepValueInt = parseFloat(amountDepValue)
    const newTotalDep = inputDepValueInt + amountDepValueInt ;
    amountDep.innerText = newTotalDep;

    const balanceAmount = document.getElementById("balance");
    const balanceAmountValue = balanceAmount.innerText;
    const balanceAmountValueInt = parseFloat(balanceAmountValue);
    const newBalance = balanceAmountValueInt + inputDepValueInt;
    balanceAmount.innerText = newBalance;

    inputDep.value = ' ';
})

