const $todos = document.querySelector('.todos');

let todos = [];

const render = data => {
    todos = data;
    console.log('[render]', todos);
    let html = '';

    todos.forEach(({ id, content, completed }) => {
        html += `
        <li id="${id}" class="todo-item">
            <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
            <label for="ck-${id}">${content}</label>
            <i class="remove-todo far fa-times-circle"></i>
        </li>`;
    });
    $todos.innerHTML = html;
};

const get = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200 || xhr.status === 201) {
            callback(JSON.parse(xhr.responseText));
        } else {
            console.error('Error', xhr.status, xhr.statusText);
        }
    };
};

window.onload = () => {
    get('/todos', render);
};