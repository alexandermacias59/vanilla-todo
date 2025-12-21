const todosContainer = document.getElementById('todos-container');
const showDeleteBtn = document.getElementById('show-delete-btn');

showDeleteBtn.addEventListener('click', toggleDeleteMode);

function toggleDeleteMode() {
    const todoCards = document.querySelectorAll('.todo-card');

    todoCards.forEach(card => {
        card.classList.toggle('show-delete');
    });

    showDeleteBtn.textContent =
        showDeleteBtn.textContent === 'Elimina'
        ? 'Annulla'
        : 'Elimina';
}

function calculateDaysLeft(endDateIso) {
    const endDate = new Date(endDateIso);
    const currentDate = new Date();
    return Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));
}

function displayTodos(todos) {
    todosContainer.innerHTML = '';

    for (const todo of todos) {

        const card = document.createElement('div');
        card.classList.add('todo-card');

        const titleSpan = document.createElement('span');
        titleSpan.textContent = todo.title;

        if (todo.done) {
            titleSpan.classList.add('todo-done');
            const check = document.createElement('span');
            check.classList.add('check-done-circle');
            titleSpan.prepend(check);
        } else {
            titleSpan.classList.add('todo-pending');
        }

        const daysSpan = document.createElement('span');
        daysSpan.classList.add('days-left-span');
        daysSpan.textContent = `Mancano: ${calculateDaysLeft(todo.endDate)} giorni`;
        titleSpan.appendChild(daysSpan);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('todo-buttons');

        const detailBtn = document.createElement('button');
        detailBtn.textContent = '>';
        detailBtn.classList.add('detail-btn');
        detailBtn.addEventListener('click', () => {
            window.location.assign(`./detail.html?todoId=${todo.id}`);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Elimina';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () => {
            //  rimuove subito la card dal DOM
            card.remove();

            //  elimina il todo dai dati (backend / localStorage)
            deleteTodo(todo.id);
        });


        buttonsContainer.appendChild(detailBtn);
        buttonsContainer.appendChild(deleteBtn);

        card.appendChild(titleSpan);
        card.appendChild(buttonsContainer);
        todosContainer.appendChild(card);
    }
}

getAllTodos().then(displayTodos);

/* ORDINAMENTI */
document.getElementById('btn-alfabetic-order')
    .addEventListener('click', () => {
        getAllTodos().then(todos => {
            todos.sort((a, b) => a.title.localeCompare(b.title));
            displayTodos(todos);
        });
    });

document.getElementById('btn-recent-order')
    .addEventListener('click', () => {
        getAllTodos().then(todos => {
            todos.sort((a, b) =>
                new Date(b.creationDate) - new Date(a.creationDate)
            );
            displayTodos(todos);
        });
    });
