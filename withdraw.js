document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    //set empty value while withdraw button click
    withdrawField.value = '';

    if(isNaN(withdrawAmount)){
        alert('input a Valid Amount');
        return;
    }

    //set Withdrawal balance

    const withdrawElement = document.getElementById('withdraw-amount');
    const withdrawTotalString = withdrawElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    //Calling for reduce Total balance when withdraw Button Click

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositBalance = parseFloat(depositTotalString);

    

    if(withdrawAmount > depositBalance ){
        alert('Your Balance is insufficient');
        return;
    }

    //Reduce when withdrawal request

    const reduceTotalBalance = depositBalance - withdrawAmount;

    depositTotalElement.innerText = reduceTotalBalance;

                                                                                                                                                          
    const withdrawTotalBalance = withdrawTotal + withdrawAmount;

    withdrawElement.innerText = withdrawTotalBalance;

})