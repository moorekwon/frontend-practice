// V1
let todos = [];
// V2
// 할당값 => 'all' / 'active' / 'completed'
let navState = 'all';


// V1
const $todos = document.querySelector('todos');
const $input = document.querySelector('.input-todo');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
// V2
const $nav = document.querySelector('.nav');


const getTodos = () => {
    todos = [
        { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: false },
    ];
    // 역순으로 sorting -> 비교함수 주기
    todos.sort((todo1, todo2) => todo2.id - todo1.id);
    console.log('[getTodos]', todos;);
};

const render = () => {
    let html = '';

    // copy본 만들어 필터링(얕은 복사)
    const _todos = todos.filter(({ completed }) => navState === 'all' ? true : (navState === 'active' ? !completed : completed));


    // 객체는 순서에 의미가 없음
    todos.forEach({ id, content, completed } => {
        html += `
        <li id="${id}" class="todo-item">
            <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
            <label for="ck-${id}">${content}</label>
            <i class="remove-todo far fa-times-circle"></i>
        </li>`;
    });
    todos.innerHTML = html;
    $completedTodos.textContent = todos.filter(todo => todo.completed).length;
    $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};


// const generateId = () => {
//     return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
// };

const generateId = () => {todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;};

const addTodo = content => {
    todos = [{ id: generateId, content, completed: false }, ...todos];
};

const changeNav = id => {
    [...$nav.children].forEach($navItem => {
        $navItem.classList.toggle('active', $navItem.id === target.id);
    });
    navState = id;
};

const toggleCompleted = id => {
    todos = todos.map(todo => todo.id === +id ? {...todo, completed: !todo.completed} : todo);
};

const removeTodo = id => {
    todos = todos.filter(todo => todo.id !== +id);
};


window.onload = () => {
    getTodos();
    addTodo();
};


// V1
$input.onkeyup = ({ target, keyCode }) => {
    const content = target.value.trim();
    if ((content === '') || (keyCode !== 13)) return;
    target.value = '';
    addTodo(content);
    render();
};

// V2
// { target } => this 안쓰기 위해
// $nav.onclick = ({ target }) => {
//     if (target.classList.contains('.nav')) return;
    // 유사배열객체를 배열로 바꿈
    // DOM의 요소를 forEach 문으로 돌림
    // [...$nav.children].forEach($navItem => {
    //     code1
        // if ($navItem.id === target.id) $navItem.classList.add('active');
        // remove -> 'active' 없어도 에러안냄(다행..)
        // else $navItem.classList.remove('active');

        // code2
        // toggle('', force) 두번째 옵션 인수 force -> boolean으로 평가될 수 있는 표현식
    //     $navItem.classList.toggle('active', $navItem.id === target.id);
    // });
    // 좋은 함수가 아님 (두가지 일을 함)
    // navState = target.id;
// };

$nav.onclick = ({ target }) => {
    if (target.classList.contains('.nav')) return;
    changeNav(target.id);
    render();
};

// 코드 실행 안됨 -> $todos에 달아야 함
// 전역코드가 평가될 때 실행
// 할당된 함수는 change 이벤트 발생될 때 실행
// document.querySelector('.todo-item .checkbox').onchange = ({ target }) => {};

$todos.onchange = ({ target }) => {
    toggleCompleted(target.parentNode.id);
    render();
};

$todos.onclick = ({ target }) => {
    if (target.classList.contains('remove-todo')) return;
    removeTodo(target.parentNode.id);
    render();
};