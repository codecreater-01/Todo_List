const Todolist=[];
//renderTodoList();
function renderTodoList(){
let todolistHTML='';
for(let i=0;i<Todolist.length;i++){
    const todo_object=Todolist[i];
    const{name,duedate}=todo_object;
    const html=`
    <div>${name}</div>
    <div>${duedate}</div>
        <button onclick="
            Todolist.splice(${i},1);
            renderTodoList();
        " class="delete">Delete</button>`;
    todolistHTML+=html;
}
    console.log(todolistHTML);
    document.querySelector('.js-todoList').innerHTML=todolistHTML;
}
function Add(){
    const todo=document.querySelector('.A');
    const todo_date=document.querySelector('.B');
    Todolist.push({
        name:todo.value,
        duedate:todo_date.value
    })
    renderTodoList();
    todo.value='';
}