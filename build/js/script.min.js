'use strict'

var addNew = document.getElementById('js-add-btn');
var popup = document.getElementById('js-popup');
var popupClose = document.getElementById('js-popup-close');
var addTask = document.getElementById('js-task-add');
var list = document.getElementById('js-list');


addNew.onclick = function() {
    event.preventDefault();
    popup.classList.add('popup-active');
};

popupClose.onclick = function() {
    event.preventDefault();
    popup.classList.remove('popup-active');
};

addTask.addEventListener('click', function() {
    event.preventDefault();

    var inputText = document.getElementById('js-value').value;
    
    var li =  document.createElement('li');
    li.classList.add('todo-item');
    li.id = 'js-item'

    var input =  document.createElement('input');
    input.classList.add('checkbox');
    input.type = 'checkbox';
    input.id = 'js-checkbox';

    var text = document.createElement('p');
    text.classList.add('todo-text');
    text.innerText = inputText;

    var edit = document.createElement('button');
    edit.classList.add('btn', 'todo-edit');
    var iconEdit = document.createElement('i');
    iconEdit.classList.add('fas', 'fa-edit');

    var del = document.createElement('button');
    del.classList.add('btn', 'todo-del')
    var iconDel = document.createElement('i');
    iconDel.classList.add('fas', 'fa-trash-alt');

    edit.appendChild(iconEdit);
    del.appendChild(iconDel);
    li.appendChild(input);
    li.appendChild(text);
    li.appendChild(edit);
    li.appendChild(del);
    list.appendChild(li);

    popup.classList.remove('popup-active');
}); 


var checkbox = document.getElementById('js-checkbox');

checkbox.addEventListener('change', function() {
    if(this.checked){
        var checkedLi = this.closest('.todo-text');
        checkedLi.classList.toggle('is-done');
    }
});