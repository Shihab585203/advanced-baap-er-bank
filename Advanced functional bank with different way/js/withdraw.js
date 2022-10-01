/*
1. Add withdraw button handler
2. get withdraw amount field by getInputFieldValueById function
3. get previouswithdraw amount by getTextElementValueById funciton
4. calculate new withdraw total and set value 
4-5. set new withdraw Total by using setTextElementById
5. get total previous balance by using getTextElementValueById
6. calculate new balance total
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-amount');
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setTextElementById('withdraw-amount', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementById('balance-total', newBalanceTotal);

})