const todosOutput = document.querySelector("#todos-output");
const filtersWrapper = document.querySelector("#filter-options");
const btnAdd = document.querySelector("#btn-add");
const btnRemoveDoneTodos = document.querySelector("#btn-remove");

let state = {
  todos: [
    {
      id: "1",
      description: "Learn JS",
      done: false,
    },
    {
      id: "2",
      description: "Learn HTML",
      done: true,
    },
    {
      id: "3",
      description: "Learn CSS",
      done: true,
    },
  ],

  filter: "All",
};

todosOutput.addEventListener("change", updateTodo);

renderTodos();

btnAdd.addEventListener("click", function (event) {
  // Neuladen der Seite vermeiden
  event.preventDefault();

  // Input-Feld
  const todoInput = document.querySelector("#description");
  // Wert aus dem Input-Feld in description speichern
  const todoDescription = todoInput.value;

  // Wenn description leer ist, Funktion beenden
  if (todoDescription.length === 0) return;

  const newTodo = {
    id: crypto.randomUUID(),
    description: todoDescription,
    done: false,
  };

  // Neues Todo in den State hinzufügen
  state.todos.push(newTodo);

  todoInput.value = "";
  // State wurde verändert, also neuen veränderten State ausgeben
  renderTodos();
  console.log(state.todos);
});

filtersWrapper.addEventListener("change", function (event) {
  state.filter = event.target.id; // "all", "open" od. "done"

  if (state.filter === "all") {
    // Wenn "all" ausgewählt ist: Gesamten State (alle Todos) rendern
    renderTodos();
    return;
  }

  if (state.filter === "open") {
    // Wenn "open" ausgewählt ist: Nur Todos rendern, die "done: false" haben
    const openTodos = state.todos.filter(function (singleTodo) {
      return singleTodo.done === false;
    });

    // Render-Funktion aufrufen und die open Todos reingeben zum Rendern
    renderTodos(openTodos);
    return;
  }

  if (state.filter === "done") {
    // Wenn "done" ausgewählt ist: Nur Todos rendern, die "done: true" haben
    const doneTodos = state.todos.filter(function (singleTodo) {
      return singleTodo.done === true;
    });

    // Render-Funktion aufrufen und die fertigen Todos reingeben zum Rendern
    renderTodos(doneTodos);
    return;
  }
});

// State im HTML abbilden
function renderTodos(todos = state.todos) {
  // Bisherige Liste leeren und bisherige li-Elemente aus <ul> löschen
  todosOutput.innerText = "";

  // Für jedes Todo das HTML erstellen:
  todos.forEach(createTodoElement);
}

function createTodoElement(singleTodo) {
  // <li> erstellen
  const listEl = document.createElement("li");

  // <input type='checkbox' />
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "todo-" + singleTodo.id;

  // soll die Checkbox gecheckt werden?
  // Ja, wenn singleTodo.done = true
  checkbox.checked = singleTodo.done;

  // Das singleTodo aus dem State auf dem DOM-Element checkbox zwischenspeichern
  checkbox.todoState = singleTodo;

  // <label>
  const description = document.createElement("label");
  description.htmlFor = checkbox.id;
  description.innerText = singleTodo.description;

  // input und label zu li hinzufügen
  listEl.appendChild(checkbox);
  listEl.appendChild(description);

  // li an das ul anhängen
  todosOutput.appendChild(listEl);
}

// Remove Done todos
function removeDoneTodos(state) {
  const updatedTodos = state.todos.filter((todo) => !todo.done);

  return {
    ...state,
    todos: updatedTodos,
  };
}

// Fertigen Todos löschen bei btn klick
btnRemoveDoneTodos.addEventListener("click", function (event) {
  event.preventDefault();

  state = removeDoneTodos(state);
  renderTodos();
});

// Aktualisieren von Todo
function updateTodo(event) {
  const checkbox = event.target;
  const checkedTodo = checkbox.todoState;

  // Gechecktes Todo aus dem State updaten
  checkedTodo.done = checkbox.checked;
}
