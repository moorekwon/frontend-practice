let todos = [];
// V2: 현재 선택된 nav 상태(현재 active 상태인 nav 요소의 자식 요소의 id)
let navState = 'all'; // 'all' / 'active' / 'completed'

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $checkbox = document.querySelector('.complete-all > .checkbox');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
// V2
const $nav = document.querySelector('.nav');

const render = () => {
  let html = '';

  // V2: 원본 todos는 보존이 필요하므로 navState에 따라 필터링된 todos의 복사본 생성
  const _todos = todos.filter(({ completed }) => (navState === 'all' ? true : navState === 'active' ? !completed : completed));
  console.log(_todos, todos);

  // V2: 필터링된 todos의 복사본으로 html 생성
  _todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

const getTodos = () => {
  // 서버로부터 todos 취득
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  // descending sort by id
  todos.sort((t1, t2) => t2.id - t1.id);
  console.log('[getTodos]', todos);
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  console.log('[addTodo]', todos);
};

const toggleCompleted = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  console.log('[toggleCompleted]', todos);
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  console.log('[removeTodo]', todos);
};

const toggleCompletedAll = checked => {
  todos = todos.map(todo => ({ ...todo, completed: checked }));
  console.log('[toggleCompletedAll]', todos);
};

const removeCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
  console.log('[removeCompleted]', todos);
};

// V2
const changeNav = id => {
  // $navItem의 id가 e.target의 id와 같으면 active 클래스를 추가하고 아니면 active 클래스를 제거
  [...$nav.children].forEach($navItem => {
    // if ($navItem.id === id) $navItem.classList.add('active');
    // else $navItem.classList.remove('active');
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navState = id;
  console.log('[navState]', navState);
};

// Event bindings
// load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
window.onload = () => {
  getTodos();
  render();
};

// todo 추가
$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (content === '' || keyCode !== 13) return;

  target.value = '';
  addTodo(content);
  render();
};

// todo.completed 토글
$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
};

// todo 제거
$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;

  removeTodo(target.parentNode.id);
  render();
};

// todo.completed 일괄 토글
$checkbox.onchange = ({ target }) => {
  toggleCompletedAll(target.checked);
  render();
};

// todo.completed 일괄 제거
$clearCompleted.onclick = () => {
  removeCompleted();
  render();
};

// V2
$nav.onclick = ({ target }) => {
  if (target.classList.contains('nav')) return;
  changeNav(target.id);
  render();
};
