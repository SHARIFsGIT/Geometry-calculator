function calcTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    if (isNaN(base) || isNaN(height)){
        alert('Please enter a valid number');
        return;
    }

    const area = 0.5 * base * height;
    setElementInnerText('triangle-result', area);

    addToCalculation('Triangle', area);
}

function calcRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    if (isNaN(width) || isNaN(length)){
        alert('Please enter a valid number');
        return;
    }

    const area = width * length;
    setElementInnerText('rectangle-result', area);

    addToCalculation('Rectangle', area);
}

function calcParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if (isNaN(base) || isNaN(height)){
        alert('Please enter a valid number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-result', area);

    addToCalculation('Parallelogram', area);
}

function calcEllipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    if (isNaN(a) || isNaN(b)){
        alert('Please enter a valid number');
        return;
    }

    const area = 3.1416 * a * b;
    setElementInnerText('ellipse-result', area);

    addToCalculation('Ellipse', area);
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

function addToCalculation(shapeType, areaResult){
    const calculationEntry = document.getElementById('calculation-entry');

    const liCount = calculationEntry.childElementCount;

    const create = document.createElement('p');
    // create.innerHTML = shapeType + ' ' + areaResult;
    create.classList.add('my-3');
    create.innerHTML = `${liCount + 1}. ${shapeType}: ${areaResult} cm<sup>2</sup>`
    // <button class="btn btn-sm btn-success">Button</button>

    calculationEntry.appendChild(create);
}