const $mainCard = document.querySelector('.main-card');

let cards = [
    { id: HTML, checked: false },
    { id: CSS, checked: false },
    { id: JavaScript, checked: false }
];

$mainCard.onclick = (e) => {
    cards = cards.forEach((card) => {
        // if (e.target)
       console.log({...card, checked: true});

    });

};

// const quiz = {
//     id: 1,
//     point: 50,
//     question: '~.png',
//     choice: {
//         a: '',
//         b: '',
//         c: '',
//         d: ''
//     }
// };
