function calcTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText);
    
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);

    const area = 0.5 * baseValue * heightValue;

    const areaSpan = document.getElementById('triangle-result');
    areaSpan.innerText = area;
}

function calcRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const widthValue = parseFloat(widthValueText);
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const lengthValue = parseFloat(lengthValueText);

    const area = widthValue * lengthValue;

    const areaSpan = document.getElementById('rectangle-result');
    areaSpan.innerText = area;
}