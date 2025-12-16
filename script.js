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


function orderByAlfabetic(){
    getAllTodos().then(results => {
        results.sort((a, b) => a.title.localeCompare(b.title));
        displayTodos(results);
    }); 
}
const btnAlfabeticOrder = document.getElementById('btn-alfabetic-order');
btnAlfabeticOrder.addEventListener('click', orderByAlfabetic);


function orderByRecent(){
    getAllTodos().then(results => {
        results.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
        displayTodos(results);
    })
}
const btnRecentOrder = document.getElementById('btn-recent-order');
btnRecentOrder.addEventListener('click', orderByRecent);