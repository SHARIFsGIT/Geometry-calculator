function calcTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    const area = 0.5 * base * height;
    setElementInnerText('triangle-result', area);
}

function calcRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    const area = width * length;
    setElementInnerText('rectangle-result', area);
}

function calcParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-result', area);
}

function calcEllipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    const area = 3.1416 * a * b;
    setElementInnerText('ellipse-result', area);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}