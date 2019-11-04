const $todoList = document.querySelector('.todos');
const $todoInput = document.querySelector('.input-todo');

const render = function () {
    let html = '';
    todos.forEach(todo => {
        html += `
            <li id="${todo.id}" class="todo-item">
                <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
                <label>${todo.label}</label>
                <i class="remove-todo far fa-times-circle"></i>
            </li>`;
    });
    $todoList.innerHTML = html;
};

const getTodos = function () {
    todos = [
        { id: 1, label: 'HTML', completed: false }
    ];
    render();
};

const addTodo = function (e) {
    const label = $todoInput.value.trim();
    if (!label || e.keyCode !== 13) return;
    const id = !(todos.length) ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
    todos = [...todos, { id, label, completed: false }];
    render();
};

const toggleCompleted = function (e) {
    const id = +e.target.parentNode.id;
    todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    render();
};

const removeTodo = function (e) {
    if (!e.target.classList.contains('remove-todo')) return;
    const id = +e.target.parentNode.id;
    todos = todos.filter(todo => todo.id !== id);
    render();
};

window.onload = getTodos;
$todoInput.onkeyup = addTodo;
$todoList.onchange = toggleCompleted;
$todoList.onclick = removeTodo;


