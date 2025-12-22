


const form = document.getElementById("form-invio-dati");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Crea l'oggetto todo dai valori del form
        const newTodo = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            endDate: document.getElementById("endDate").value,
            color: document.getElementById("color").value,

            done: false,
            creationDate: new Date().toISOString()
        };

        // Chiama l'API per creare il todo
        createNewTodo(newTodo)
            .then(() => {
                
                window.location.href = "index.html";
            })
            .catch(error => {
                console.error("Errore:", error);
                alert("Riprova.");
            });

        // Reset 
        form.reset();
    });
}
