function displayTodos(todos) {
    const todosContainer = document.getElementById('todos-container');
   todosContainer.innerHTML = '';

   function calculateDaysLeft(endDateIso) {
       const endDate = new Date(endDateIso);
       const currentDate = new Date();
         const timeDiff = endDate - currentDate;
         const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            return daysLeft;
    }
   for (const todo of todos) {

        const card = document.createElement('div');
        card.classList.add('todo-card');

        const titleSpan = document.createElement('span');
        const textNode = document.createTextNode(todo.title);
        titleSpan.appendChild(textNode);

        if (todo.done === true) {
            titleSpan.classList.add('todo-done');
            const checkDoneCircle = document.createElement("span");
            checkDoneCircle.classList.add('check-done-circle');
            titleSpan.prepend(checkDoneCircle);
        } else {
            titleSpan.classList.add('todo-pending');
        }

        const detailBtn = document.createElement('button');
        detailBtn.appendChild(document.createTextNode('>'));
        detailBtn.classList.add('detail-btn');
        detailBtn.addEventListener('click', () => {
            window.location.assign("./detail.html?todoId=" + todo.id);
        });

        card.appendChild(titleSpan);
        card.appendChild(detailBtn);
        todosContainer.appendChild(card);

        const daysSPan = document.createElement('span');
        daysSPan.classList.add('days-left-span');
        const daysLeft = calculateDaysLeft(todo.endDate);
        daysSPan.appendChild(document.createTextNode(`Mancano: ${daysLeft} giorni`));
        daysSPan.style.marginLeft = '15px';
        titleSpan.appendChild(daysSPan);
        
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