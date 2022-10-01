document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    // insert deposit value
    depositField.value = '';

    //insert NaN value
    if(isNaN(newDeposit)){
        alert('Please input valid Amount');
        return;
    }

    const previousDepositAmount = document.getElementById('deposit-amount');
    const previousDepositSting = previousDepositAmount.innerText;
    const previousDeposit = parseFloat(previousDepositSting);
    const TotalDeposit = previousDeposit + newDeposit;

    previousDepositAmount.innerText = TotalDeposit;

    //add total balance part

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);

    const currentTotalBalance = depositTotal + newDeposit;

    depositTotalElement.innerText = currentTotalBalance;


    
})