function getAllTodos() {
    const apiUrl = "https://6941164f686bc3ca81659153.mockapi.io/api/v1/todos"

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}

function getTodo(id) {
    const apiUrl = "https://6941164f686bc3ca81659153.mockapi.io/api/v1/todos/id"+id;

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}

function deleteTodo(id) {

    const apiUrl = "https://6941164f686bc3ca81659153.mockapi.io/api/v1/todos/id"+id;

    return fetch(apiUrl, {method: 'DELETE'})
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error))
}

function changeDoneStatus(id, newStatus) {

    const apiUrl = "https://6941164f686bc3ca81659153.mockapi.io/api/v1/todos/id"+id;

    return fetch(apiUrl, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ done: newStatus })
    }).then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error))
}
