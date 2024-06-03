const app = document.getElementById('app');

const submit = document.getElementById('submit');

submit.addEventListener('click', (e)=> {
    e.preventDefault();

    let canvasSize = document.getElementById('canvas-size').value;

    const existingColor = app.querySelector('colorInput');
    if (existingColor) {
        app.removeChild(existingColor);
    }

    const colorInput = document.createElement('colorInput');
    colorInput.innerHTML = '<input type="color" name="color" id="color"></input>';
    app.append(colorInput);

    const existingTable = app.querySelector('table');
    if (existingTable) {
        app.removeChild(existingTable);
    }

    const table = document.createElement('table');
    table.style.margin = "auto";
    app.append(table);

    let column = '';

    for (let i = 0; i < canvasSize; i++) {
        column += '<td></td>';
    }

    let row = '<tr>' + column + '</tr>';

    for (let j = 0; j < canvasSize; j++) {
        table.innerHTML += row;
    }

    const cell = table.getElementsByTagName('td');

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', () => {
            const color = document.getElementById('color').value;
            if (cell[i].style.backgroundColor !== '' && cell[i].style.backgroundColor !== 'initial') {
                cell[i].style.backgroundColor = 'initial';
            } else {
                cell[i].style.backgroundColor = color;
            }
        })
    }

    const existingReset = app.querySelector('reset');
    if (existingReset) {
        app.removeChild(existingReset);
    }

    const reset = document.createElement('reset');
    reset.innerHTML = '<input type="reset" value="Reset canvas">';
    app.append(reset);
    
    reset.addEventListener('click', (e) => {
        for (let i = 0; i < cell.length; i++) {
            cell[i].style.backgroundColor = 'initial';
        }
    })
})
