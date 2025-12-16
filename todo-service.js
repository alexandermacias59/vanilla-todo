function getAllTodos() {
    const apiUrl = "https://6941164f686bc3ca81659153.mockapi.io/api/v1/todos";

     return fetch(apiUrl)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.error('Error fetching todos:', error));
  
}
function getTodoById(id){
    const apiUrl = `https://6941164f686bc3ca81659153.mockapi.io/api/v1/todos/${id}`;

    return fetch(apiUrl)
       .then(response => response.json())
       .then(result => result)
       .catch(error => console.error('Error fetching todo by id:', error));
}