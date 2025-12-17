const searchParams = new URLSearchParams(window.location.search);

const todoId = searchParams.get('todoId');

getTodoById(todoId).then(todo => {
    // Display the todo details on the page
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;
    const descriptionHeader = document.getElementById('todo-description');
    descriptionHeader.innerHTML = todo.description;
    const creationDateHeader = document.getElementById('todo-creation-date');
    creationDateHeader.innerHTML = formatDate(todo.creationDate);

    const doneHeader = document.getElementById('todo-done');
    if (todo.done) {
        doneHeader.innerHTML = 'Yes';
    } else {
        doneHeader.innerHTML = 'No';
    }
    
    const endDateHeader = document.getElementById('todo-end-date');
    endDateHeader.innerHTML = formatDate(todo.endDate);
    
    const colorHeader = document.getElementById('todo-color');
    // pulisci eventuale contenuto precedente
    colorHeader.innerHTML = '';
    const colorBox = document.createElement('div');
    colorBox.style.width = '20px';
    colorBox.style.height = '20px';
    colorBox.style.backgroundColor = todo.color;
    colorBox.style.border = '1px solid #000';
    colorBox.style.display = 'inline-block';
    colorBox.style.verticalAlign = 'middle';

    colorHeader.appendChild(colorBox);

   
});

function formatDate(dateIso) {
    const date = new Date(dateIso);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
}