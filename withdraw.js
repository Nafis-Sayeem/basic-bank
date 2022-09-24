document.getElementById("btn-wid").addEventListener('click' , function(){

    const inputWid = document.getElementById("input-wid");
    const inputWidValue = inputWid.value ;
    const inputWidValueInt = parseFloat(inputWidValue);


    const widAmount = document.getElementById("wid-amount");
    const widAmountValue = widAmount.innerText;
    const widAmountValueInt = parseFloat(widAmountValue);

    const NewWidAmount = widAmountValueInt + inputWidValueInt ;
    widAmount.innerText = NewWidAmount ; 

    const balance = document.getElementById("balance");
    const balanceValue = balance.innerText;
    const balanceAmountValueInt = parseFloat(balanceValue);

    const newBalance = balanceAmountValueInt - inputWidValueInt ;
    balance.innerText = newBalance;

    inputWid.value = ' ';
})