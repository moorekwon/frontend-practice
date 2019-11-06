// const solution1 = (todos) => {
//     let result;

    // result = todos.map(todo => {
    //     if (todo.id === 2) {
    //         return {...todo, completed: !todo.completed};
    //     } else return todo;
    // });

    // result = todos.map(todo => {
    //     return todo.id === 2 ? {...todo, completed: !todo.completed} : todo;
    // });

//     result = todos.map(todo => todo.id === 2 ? {...todo, completed: !todo.completed} : todo);

//     return result;
// };

// const solution1 = (todos) => {
//     let result;
//     result = todos.filter(todo => todo.id !== 3);
//     return result;
// };

// console.log(solution1([
//     { id: 1, content: 'HTML', completed: false },
//     { id: 2, content: 'CSS', completed: true },
//     { id: 3, conten: 'JavaScript', completed: false }
// ]));

const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, conten: 'JavaScript', completed: false }
];

console.log(Math.max(...todos.map(todo => todo.id)));

