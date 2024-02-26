let button1 = document.querySelector('#addtask')
let button2 = document.querySelector('#deletetask')
let button3 = document.querySelector('#howtouse')

let list = document.querySelector('#list')
let input = document.querySelector('#inputfield')

button1.addEventListener('click', function(){
  let input = document.querySelector('input');
  if (input.value.trim() === '') {
    alert('Задача не может быть пустой или состоять только из пробелов!');
    return;
  }

  let listItem = document.createElement('li');
  listItem.innerHTML = input.value.trim() + ' ';

  let colorchange = document.createElement('button');
  colorchange.textContent = 'Изменить цвет';
  colorchange.style.cssText = `
    width: 160px;
    color: white;
    font-weight: bold;
    height: 30px;
    font-family: 'Courier New';
    border: none;
    border-radius: 7px;
    cursor: pointer;
    background-color: black;
    outline: none;
    font-size: 16px;
    margin-left: 10px;
`;

  listItem.appendChild(colorchange);
  let list = document.querySelector('ul');
  list.appendChild(listItem);
  input.value = '';

  colorchange.addEventListener('click', function() {
    let colors = ['red', 'green', 'yellow', 'pink', 'purple', 'orange', 'black'];
    let selectedcolor = prompt('Выберите цвет: red, green, yellow, pink, purple, orange, black');
    if (colors.includes(selectedcolor)) {
      listItem.style.color = selectedcolor;
    } else {
      alert('Выбран недопустимый цвет');
    }
  });
});

button2.addEventListener("click", function () {
  let lastItem = list.lastChild;
  if (lastItem) {
      lastItem.remove();
  }
})

button3.addEventListener("click", function () {
  alert("Для использования Todoist'a. Нужно сперва написать свою задачу в поле для задач и нажать на кнопку \"Добавить задачу\". Если вы хотите удалить последнюю задачу, соответственно нажимаете кнопку \"Удалить задачу\"");
});

function consoletext(){
console.log('Хорошего дня вам!');
}
consoletext();