function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const descriptionSpan = document.getElementById('todo-description');
    descriptionSpan.innerHTML = todo.description;

    const creationDateSpan = document.getElementById('todo-creation-date');
    creationDateSpan.innerHTML = formaDate(todo.creationDate);

    const endDateSpan = document.getElementById('todo-end-date');
    endDateSpan.innerHTML = formaDate(todo.endDate);

    const colorDiv = document.getElementById('todo-color');
    colorDiv.style.backgroundColor = todo.color;

    const doneSpan = document.getElementById('todo-done');
    if (todo.done) {
        doneSpan.innerHTML = 'completato';
    } else {
        doneSpan.innerHTML = 'da completare'
    }

    const statusBtn = document.getElementById("status-btn");
    if (todo.done) {
        statusBtn.innerHTML = "riattiva";
    } else {
        statusBtn.innerHTML = "completa";
    }

}

function formaDate(dateISO) {
    const date = new Date(dateISO);

    // const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    // return formattedDate;

    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };

    return date.toLocaleDateString("it-IT", options);
}

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('todoId');

let selectedTodo;

getTodo(id).then(result => {
    selectedTodo = result;
    displayTodo(result)
});


function deleteTodoAndRedirect() {

    if (confirm("Vuoi veramente cancellare il todo???")) {
        deleteTodo(selectedTodo.id).then(_ => {
            window.location.assign('./')
        });  
    }
}

function changeStatus() {
    changeDoneStatus(selectedTodo.id, !selectedTodo.done)
    .then(_ => {
        selectedTodo.done = !selectedTodo.done;
        displayTodo(selectedTodo);
    })
}