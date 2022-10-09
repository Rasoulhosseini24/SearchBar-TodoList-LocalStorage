let todos = localStorage.getItem("todos");


try {
    todos = JSON.parse(todos);
    todos = todos.length ? todos : null;
}

catch (e) {
    todos = null
}

if (!todos) {
    todos = [
        "shopping",
        "like videos",
        "watch videos",
    ]
    localStorage.setItem("todos", JSON.stringify(todos))
}


function createtodos(todos) {

    let todosList = document.querySelector("#todos-list")

    todosList.innerHTML = " "

    todos.forEach((todoo, index) => {
        let li = document.createElement("li")
        li.className = "list-group-item"
        let content = document.createElement("span")
        content.innerHTML = todoo
        let trashh = document.createElement("img")
        trashh.src = "trash.svg"
        trashh.alt = "del icon"
        trashh.style = "float:right"

        li.append(content)
        li.append(trashh)


        todosList.append(li)

        trashh.addEventListener("click", e => {
            todos.splice(index, 1)
            localStorage.setItem("todos", JSON.stringify(todos))
            createtodos(todos)

        })

    });
}

createtodos(todos);