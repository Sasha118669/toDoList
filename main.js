document.addEventListener('DOMContentLoaded', ()=>{

    const creator = document.getElementById('creator');
    const taskList = document.querySelector(".classList");

//функция для добавления задания 
    const createTask = (text = '')=>{
      if(!text.trim()) return;
      const taskItem = document.createElement('li');
      taskItem.textContent = text;
      taskItem.classList.add('task-item');
///////////////////////////////////////////////////////////////////////
const saveButton = createSaveButton(taskItem);
      taskItem.appendChild(saveButton);

///////////////////////////////////////////////////////////////////////
const editButton = createEditButton(taskItem);
      taskItem.appendChild(editButton);

///////////////////////////////////////////////////////////////////////
const removeButton = createRemoveButton(taskItem);
taskItem.appendChild(removeButton);

///////////////////////////////////////////////////////////////////////

      taskList.appendChild(taskItem);//это относиться к 'createElement'
    };

    //функция для добавления кнопки изминения задания
        const createSaveButton = (taskItem)=>{
          const saveButton = document.createElement('button');
          saveButton.textContent = 'save';
          saveButton.classList.add('save-task');
          saveButton.style.display = 'none';
          return saveButton;
        };

    //функция для добавления кнопки изминения задания
        const createEditButton = (taskItem)=>{
          const editButton = document.createElement('button');
          editButton.textContent = 'edit';
          editButton.classList.add('edit-task');
          return editButton;
        };

//функция для добавления кнопки удаления задания
    const createRemoveButton = (taskItem)=>{
      const removeButton = document.createElement('button');
      removeButton.textContent = 'remove';
      removeButton.classList.add('remove-task');
      return removeButton;
    };

// функция для сробатования функций по нажатию на соотвецтвуюшее кнопки 
document.addEventListener('click', (event)=>{

  if(event.target.id === 'add' && creator.value.trim() !== ''){
   createTask(creator.value.trim());
   creator.value = '';

  }  else if(event.target.classList.contains('edit-task')){
    const taskItem = event.target.parentElement;
    const currentText =  taskItem.firstChild.textContent.trim();

      const input = document.createElement('input');
      input.type = 'text';
     input.value = currentText;

     taskItem.firstChild.replaceWith(input);
     input.focus();

   event.target.textContent = 'save';
   event.target.classList.remove('edit-task');
   event.target.classList.add('save-task');
   
   } else if(event.target.classList.contains('save-task')){
  const taskItem = event.target.parentElement;
  const input = taskItem.querySelector('input');

  if(input){
    const newText = input.value.trim();
    if(newText){
      const textNode = document.createTextNode(newText || 'Empty Task');
    input.replaceWith(textNode);
    } else {
      input.replaceWith(document.createTextNode('Empty Task'));
  }
  }
  event.target.textContent = 'edit';
  event.target.classList.remove('save-task');
  event.target.classList.add('edit-task'); 

   } else if(event.target.classList.contains('remove-task')){
   event.target.parentElement.remove()

  } else if(event.target.id === 'removeAll' && taskList.innerHTML !== ''){
taskList.innerHTML ='';
  }
 })
});