function displayTodos(todos) {
    const todosContainer = document.getElementById('todos-container');
   todosContainer.innerHTML = '';
   for (const todo of todos) {

         const card = document.createElement('div');
        card.classList.add('todo-card');

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));

        const detailBtn = document.createElement('button');
        detailBtn.appendChild(document.createTextNode('>'));
        detailBtn.classList.add('detail-btn');
        detailBtn.addEventListener('click', () => {
            window.location.assign("./detail.html?todoId=" + todo.id);
        });

        card.appendChild(titleSpan);
        card.appendChild(detailBtn);
        todosContainer.appendChild(card);
    }
}
getAllTodos().then(results => displayTodos(results));