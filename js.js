
const addTaskButton = document.querySelector('#addTaskButton') 
const tasksButton = document.querySelector('#addTaskButton1') 
const taskInput = document.querySelector('#taskInput') 
const taskSection = document.querySelector('.taskSection') 
const tasks = document.querySelector('.tasks') 
const tasksTextField = document.querySelector('.tasksTextField') 
const tasksLength = tasks.getElementsByTagName("*").length
let inputData = {}
const LS = localStorage




addTaskButton.addEventListener('click', ()=> {
    //taskInput1.value = addTaskInput.value
    taskInput1.value = addTaskInput.value
    console.log(taskInput);
    addTaskInput.value = ''
    // for (i=0; i < tasksLength; i++) {
    //     tasks.children.value = "!"
    //     console.log(tasks.children);

    // }
})

// tasksButton.addEventListener('click', ()=> {
//     taskInput1.value = ''
// })



    

