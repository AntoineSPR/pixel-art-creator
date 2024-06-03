const app = document.getElementById('app');


const reset = document.createElement('reset');
reset.innerHTML = '<input type=reset>';
app.append(reset);

const submit = document.getElementById('submit');

submit.addEventListener('click', (e)=> {
    e.preventDefault();

    let canvasSize = document.getElementById('canvas-size').value;

    const table = document.createElement('table');
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

    reset.addEventListener('click', (e) => {
        for (let i = 0; i < cell.length; i++) {
            cell[i].style.backgroundColor = 'initial';
        }
    })
})
