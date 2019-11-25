const express = require('express');
const app = express();
// 아래 데이터를 데이터베이스에서 가져와야 하는데,
// 예제에서는 서버 파일에 우리가 임의로 데이터를 가져왔다고
// 가정하고 데이터를 클라이언트(프론트)에 던져준다.
let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false }
];

app.use(express.static('public'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('hello world!');
// });

app.get('/todos', (req, res) => {
  todos = todos.sort((sort1, sort2) => sort2.id - sort1.id);
  console.log(todos);

  res.send(todos);
});

app.post('/todos', (req, res) => {
  console.log('[req.body]', req.body);
  // todos = [req.body, ...todos];
  res.send(todos);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});