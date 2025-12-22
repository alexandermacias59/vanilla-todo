function displayTodos(todos){

    const todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = "";

    for (const todo of todos) {
        
        const card = document.createElement('div');
        card.classList.add('todo-card');

        const colorAndTitleDiv = document.createElement('div');
        colorAndTitleDiv.classList.add('color-and-title');

        const colorDot = document.createElement('div');
        colorDot.classList.add('colored-dot');
        colorDot.style.backgroundColor = todo.color;

        colorAndTitleDiv.appendChild(colorDot);

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));
        titleSpan.style.textDecoration = todo.done ? 'line-through' : 'none';

        colorAndTitleDiv.appendChild(titleSpan);

        card.appendChild(colorAndTitleDiv);

        // const detailBtn = document.createElement('button');
        // detailBtn.appendChild(document.createTextNode("🠊"));
        // detailBtn.classList.add("detail-btn");
        // detailBtn.addEventListener('click', () => {
        //     window.location.assign('./detail.html?todoId=' + todo.id)
        // })

        // card.appendChild(detailBtn);

        const actionsDiv = document.createElement('div');
        let completeActionIcon;
        if (todo.done) {
            completeActionIcon = "↺"
        } else {
            completeActionIcon = "✓"
        }
        const completeBtn = document.createElement('button');
        completeBtn.appendChild(document.createTextNode(completeActionIcon));
        completeBtn.classList.add("action");

        completeBtn.addEventListener('click', () => {
            changeDoneStatus(todo.id, !todo.done)
            .then(_ => {

                todo.done = !todo.done;
                displayTodos(todos);

                // getAllTodos().then(results => {
                //     todos = results;
                //     displayTodos(todos)
                // })          
            })
        })

        actionsDiv.appendChild(completeBtn);

        const detailLink = document.createElement('a');
        detailLink.appendChild(document.createTextNode("🠊"));
        detailLink.classList.add("action");
        detailLink.href = './detail.html?todoId=' + todo.id;

        actionsDiv.appendChild(detailLink);

        card.appendChild(actionsDiv);

        todosContainer.appendChild(card);

    }

}

let todos = []

getAllTodos().then(results => {
    todos = results;
    displayTodos(todos)
})


function orderByTitle() {
    todos.sort((t1, t2) => t1.title.localeCompare(t2.title));
    displayTodos(todos);
}

function compareDates(t1, t2) {
    const date1 = t1.creationDate;
    const date2 = t2.creationDate;
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
    const time1 = dateObj1.getTime();
    const time2 = dateObj2.getTime();
    return time2 - time1; 
}

function orderByCreationDate(){
    todos.sort(compareDates);
    displayTodos(todos);
}


// due tasti nella home (lista di todo)
// 1) mette in ordine alfabetico
// 2) mette in ordine dal più nuovo al più vecchio in base alla creationDate

// 0) finire il task dato a lezione (quanti giorni mancano alla scadenza??)
// 1) personalizzare graficamente l'app
// 2) aggiungere un bottone delete nella pagina di dettaglio