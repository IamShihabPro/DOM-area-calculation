let mouseClick = 0

document.getElementById('btn-triangle').addEventListener('click', function(){
    
    mouseClick = mouseClick + 1

    const nameCard = document.getElementById('triangle-card').innerText;
    
    const triangleB = getInputValue('triangle-b');
    
    const triangleH = getInputValue('triangle-h');
   
    const nameValue = document.getElementById('name-value').innerText;
    

    let total = parseFloat(triangleB) * parseFloat(triangleH) * 0.5;
    let cal = total.toFixed(2)

    if(isNaN(triangleB) || isNaN(triangleH)){
        alert('Please provide valid number')
        return;
    }


    // show data in table
    displayData(nameCard, cal, nameValue)
    
    
});


document.getElementById('btn-rectangle').addEventListener('click', function(){
    
    mouseClick = mouseClick + 1

    const nameCard = document.getElementById('rectangle-card').innerText;

    const rectangleW = getInputValue('rectangle-w');
    const rectangleH = getInputValue('rectangle-l');

    const nameValue = document.getElementById('name-value').innerText

    let total = parseFloat(rectangleW) * parseFloat(rectangleH);
    let cal = total.toFixed(2)


    if(isNaN(rectangleW) || isNaN(rectangleH)){
        alert('Please provide valid number')
        return;
    }

    // show data in table
    displayData(nameCard, cal, nameValue)
    
    
});

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    
    mouseClick = mouseClick + 1

    const nameCard = document.getElementById('parallelogram-card').innerText;

    const parallelogramB = getInputValue('parallelogram-b')
    const parallelogramH = getInputValue('parallelogram-h')

    const nameValue = document.getElementById('name-value').innerText

    let total = parseFloat(parallelogramB) * parseFloat(parallelogramH);
    let cal = total.toFixed(2)

    if(isNaN(parallelogramB) || isNaN(parallelogramH)){
        alert('Please provide valid number')
        return;
    }

    // show data in table
    displayData(nameCard, cal, nameValue)
    
});


document.getElementById('btn-rhombus').addEventListener('click', function(){
    
    mouseClick = mouseClick + 1

    const nameCard = document.getElementById('rhombus-card').innerText;
    const rhombusD1 = getInputValue('rhombus-d1')
    const rhombusD2 = getInputValue('rhombus-d2')
    const nameValue = document.getElementById('name-value').innerText

    let total = 0.5 * parseFloat(rhombusD1) * parseFloat(rhombusD2);
    let cal = total.toFixed(2)


    if(isNaN(rhombusD1) || isNaN(rhombusD2)){
        alert('Please provide valid number')
        return;
    }


    // show data in table
    displayData(nameCard, cal, nameValue)
    
});

document.getElementById('btn-pentagon').addEventListener('click', function(){
    
    mouseClick = mouseClick + 1

    const nameCard = document.getElementById('pentagon-card').innerText;
    const pentagonP = getInputValue('pentagon-p')
    const pentagonB = getInputValue('pentagon-b')
    const nameValue = document.getElementById('name-value').innerText

    let total = parseFloat(pentagonP) * parseFloat(pentagonB) * 0.5;
    let cal = total.toFixed(2)


    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert('Please provide valid number')
        return;
    }

    // show data in table
    displayData(nameCard, cal, nameValue)
    
});

document.getElementById('btn-ellipse').addEventListener('click', function(){
    
    mouseClick = mouseClick + 1

    const nameCard = document.getElementById('ellipse-card').innerText;
    const ellipseA = getInputValue('ellipse-a');
    const ellipseB = getInputValue('ellipse-b');
    const nameValue = document.getElementById('name-value').innerText

    let total = parseFloat(ellipseA) * parseFloat(ellipseB) * 3.1416;
    let cal = total.toFixed(2)

    if(isNaN(ellipseA) || isNaN(ellipseB)){
        alert('Please provide valid number')
        return;
    }

    // show data in table
    displayData(nameCard, cal, nameValue)
    
});

// Button
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
});





// Common Function

function displayData(nameCard, total, nameValue){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${mouseClick}</td>
    <td>${nameCard}</td>
    <td>${total} <span>cm<sup>2</sup></span></td>
   
    `;

    container.appendChild(tr);
}

// common function
function getInputValue(id){
    const value = document.getElementById(id).value;
    const valueFloat = parseFloat(value)
    return parseFloat(valueFloat);
};

