const searchParams = new URLSearchParams(window.location.search);

const todoId = searchParams.get('todoId');

getTodoById(todoId).then(todo => {
    // Display the todo details on the page
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;
    const descriptionHeader = document.getElementById('todo-description');
    descriptionHeader.innerHTML = todo.description;
    const creationDateHeader = document.getElementById('todo-creation-date');
    creationDateHeader.innerHTML = todo.creationDate;
    const doneHeader = document.getElementById('todo-done');
    doneHeader.innerHTML = todo.done;
    const endDateHeader = document.getElementById('todo-end-date');
    endDateHeader.innerHTML = todo.endDate;
    const colorHeader = document.getElementById('todo-color'); 
    colorHeader.innerHTML = todo.color; 
   
});