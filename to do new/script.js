const input = document.querySelector('#todo-input');
const submitButton = document.querySelector('#submit');
const selectAllButton = document.querySelector('#select-all');
const deleteSelectedButton = document.querySelector('#delete-selected');

const addTask = () => {
  const inputData = input.value;
  if (!inputData) return; 
  input.value = "";

  const todo_el = document.createElement('div');
  todo_el.classList.add('todo-item');

  const todo_checkbox_el = document.createElement('input');
  todo_checkbox_el.type = 'checkbox';
  todo_checkbox_el.classList.add('todo-checkbox');

  const todo_content_el = document.createElement('div');
  todo_el.appendChild(todo_checkbox_el);
  todo_el.appendChild(todo_content_el);

  const todo_input_el = document.createElement('input');
  todo_input_el.classList.add('text');
  todo_input_el.type = 'text';
  todo_input_el.value = inputData;
  todo_input_el.setAttribute('readonly', 'readonly');

  todo_content_el.appendChild(todo_input_el);

  const todo_actions_el = document.createElement('div');
  todo_actions_el.classList.add('action-items');

  const todo_done_el = document.createElement('i');
  todo_done_el.classList.add('fa');
  todo_done_el.classList.add('fa-check');

  const todo_edit_el = document.createElement('i');
  todo_edit_el.classList.add('fa');
  todo_edit_el.classList.add('fa-pencil');
  todo_edit_el.classList.add('edit');

  const todo_delete_el = document.createElement('i');
  todo_delete_el.classList.add('fa');
  todo_delete_el.classList.add('fa-trash');

  todo_actions_el.appendChild(todo_done_el);
  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);

  document.querySelector('.todo-lists').appendChild(todo_el);

  todo_done_el.addEventListener('click', () => {
    todo_input_el.classList.add('done');
    todo_el.removeChild(todo_actions_el);
  });

  todo_edit_el.addEventListener('click', () => {
    if (todo_edit_el.classList.contains("edit")) {
      todo_edit_el.classList.remove("edit");
      todo_edit_el.classList.remove("fa-pencil");
      todo_edit_el.classList.add("fa-save");
      todo_input_el.removeAttribute("readonly");
      todo_input_el.focus();
    } else {
      todo_edit_el.classList.remove("fa-save");
      todo_edit_el.classList.add("fa-pencil");
      todo_edit_el.classList.add("edit");
      todo_input_el.setAttribute("readonly", "readonly");
    }
  });

  todo_delete_el.addEventListener('click', () => {
    document.querySelector('.todo-lists').removeChild(todo_el);
  });
};

submitButton.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

selectAllButton.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.todo-checkbox');
  checkboxes.forEach(checkbox => checkbox.checked = true);
});

deleteSelectedButton.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.todo-checkbox:checked');
  checkboxes.forEach(checkbox => {
    const todoItem = checkbox.closest('.todo-item');
    todoItem.remove();
  });
});
