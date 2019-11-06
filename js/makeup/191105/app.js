// const solution1 = (todos) => {
//     let result;
//     result = [...todos, 'sass'];
//     return result;
// };

// console.log(solution1(['html', 'css', 'javascript']));


const solution2 = (todos) => {
    let result;

    // code1
    // result = todos.map(todo => {
    //     if (todo.id === 2) {
    //         return {...todo, completed: !todo.completed};
    //     } else {
    //         return todo;
    //     };
    // });

    // code2
    result = todos.map(todo => todo.id === 2 ? {...todo, completed: !todo.completed} : todo);
    return result;
};

console.log(solution2([
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ]));