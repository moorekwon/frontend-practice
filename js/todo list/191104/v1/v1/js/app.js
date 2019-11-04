// let todos = [];

const $todoList = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');


const getTodos = () => {
    todos = [
        { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true }
    ];
    todos.sort((todo1, todo2) => todo2.id - todo1.id);
};

const render = () => {
    let html = '';

    // todos.forEach(({ id, content, completed }) => {
    //     html += `
    //     <li id="${id}" class="todo-item">
    //         <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
    //         <label for="ck-${id}">${content}</label>
    //         <i class="remove-todo far fa-times-circle"></i>
    //     </li>`;
    // });

    todos.forEach(todo => {
        html += `
        <li id="${todo.id}" class="todo-item">
            <input class="checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
            <label for="ck-${todo.id}">${todo.content}</label>
            <i class="remove-todo far fa-times-circle"></i>
      </li>`;
    });
    $todoList.innerHTML = html;

    $completedTodos.textContent = todos.filter(todo => todo.completed).length;
    $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};


// const generateId = () => {todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;};

const generateId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const addTodo = content => {
    // !!!
    todos = [{ id: generateId(), content, completed: false }, ...todos];
    console.log('[addTodo]', todos);
};

const toggleCompleted = id => {
    todos = todos.map(todo => todo.id === +id ? {...todo, completed: !todo.completed} : todo);
    console.log('[toggleCompleted]', todos);
};

const removeTodo = id => {
    todos = todos.filter(todo => todo.id !== +id);
    console.log('[removeTodo]', todos);
};

const completeAll = completed => {
    // !!!
    todos = todos.map(todo => ({...todo, completed}));
    console.log('[completeAll', todos);
};

const removeCompleteAll = () => {
    todos = todos.filter(todo => !todo.completed);
    console.log('[removeCompleteAll]', todos);
};


window.onload = () => {
    getTodos();
    render();
};


// $inputTodo.onkeyup = ({ target, keyCode }) => {
//     const content = target.value.trim();
//     if (content === '' || keyCode !== 13) return;
//     target.value = '';
//     addTodo(content);
//     render();
// };

$inputTodo.onkeyup = (e) => {
    const content = e.target.value.trim();
    if (!content || e.keyCode !== 13) return;
    e.target.value = '';
    addTodo(content);
    render();
};

// $todoList.onchange = ({ target }) => {
//     toggleCompleted(target.parentNode.id);
//     render();
// };

$todoList.onchange = (e) => {
    toggleCompleted(e.target.parentNode.id);
    render();
};

// $todoList.onclick = ({ target }) => {
//     if (!target.classList.continas('remove-todo')) return;
//     removeTodo(target.parentNode.id);
//     render();
// };

$todoList.onclick = (e) => {
    if (!e.target.classList.contains('remove-todo')) return;
    removeTodo(e.target.parentNode.id);
    render();
};

// $completeAll.onchange = ({ target }) => {
//     completeAll(target.checked);
//     render();
// };

$completeAll.onchange = (e) => {
    completeAll(e.target.checked);
    render();
};

// $clearCompleted.onclick = ({ target }) => {
//     removeCompleteAll();
//     render();
// };

$clearCompleted.onclick = () => {
    removeCompleteAll();
    render();
};