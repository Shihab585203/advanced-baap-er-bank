function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const textElementvalue = parseFloat(elementValueString);
    return textElementvalue;
}

function setTextElementById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue; 
}