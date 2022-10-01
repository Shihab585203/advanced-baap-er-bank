document.getElementById('btn-deposit').addEventListener('click', function(){
    // 1. Get the element Id
    // 2. get the value from the element
    // 3. convert string value to a number


    const newDepositAmount = getInputFieldValueById('deposit-field');

    // *** Get Previous Deposit Total by id

    const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set new deposit total
    setTextElementById('deposit-total', newDepositTotal);

    // get previous balance using function
    const previousBalanceTotal = getTextElementValueById('balance-total');

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementById('balance-total', newBalanceTotal);

})


