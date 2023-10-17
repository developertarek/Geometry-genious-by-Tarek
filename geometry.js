function getValueFromInputField(inputId){
    const inputelement = document.getElementById(inputId)
    const inputvalueString = inputelement.value;
    const inputValue = parseFloat(inputvalueString)
    return inputValue;
    }
function setelementInnerText(elementId, area){
    const  defaultvalueOfArea = document.getElementById(elementId)
    defaultvalueOfArea.innerText = area;
}
document.getElementById('tri-btn').addEventListener('click', function(){
    const base = getValueFromInputField('tri-base-field')
    const height = getValueFromInputField('tri-height-field')
    const area = 0.5 * base * height;
    setelementInnerText('area-span', area)
})
document.getElementById('rect-btn').addEventListener('click', function(){
    const width= getValueFromInputField('rect-base-field')
    const height = getValueFromInputField('rect-height-field')
    const area =width * height;
    setelementInnerText('area-rect', area)
})
document.getElementById('para-btn').addEventListener('click', function(){
    const base = getValueFromInputField('para-base-field')
    const height = getValueFromInputField('para-height-field')
    const area =base * height;
    setelementInnerText('area-para', area)
})
document.getElementById('rho-btn').addEventListener('click', function(){
    const distanceOne = getValueFromInputField('rho-distanceOne-field')
    const distanceTwo= getValueFromInputField('rho-distanceTwo-field')
    const area = 0.5 * distanceOne * distanceTwo;
    setelementInnerText('area-rho', area)
})
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const valueOne   = getValueFromInputField('ellip-aaxis-field')
    const valueTwo= getValueFromInputField('ellip-baxis-field')
    const area = 3.14 * valueOne * valueTwo;
    const roundedNumber = area.toFixed(2);
    setelementInnerText('area-ellipse', roundedNumber)
})
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const p = getValueFromInputField('pentagon-p-field')
    const b= getValueFromInputField('pentagon-b-field')
    const area = 0.5 * p * p;
    setelementInnerText('area-pentagon', area)
})
