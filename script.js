
let tasks = [];//{title:"dddd", done:fasle,important}

function renderEditor() {
    let inputEl = document.querySelector("#todo-panel .todo-editor >input");
    inputEl.onchange = (e) => {
        console.log("text , ", e.target.value);

    };
    let addTask =() =>{
        let newTask = {
            title: inputEl.value,
            done: false,
        };
        inputEl.value = "";
        tasks.push(newTask);
        console.log("tasks,", tasks);
        renderTaskItems()
    }

    inputEl.onkeypress = (e) =>{
        if(e.key==="Enter"){
            addTask ();

        }
    };

    let addE1 = document.querySelector("#todo-panel .todo-editor >button");
    addE1.onclick = (e) => {
        addTask ();
    };
    
}

function renderTaskItems() {
  
    let itemsE1 = document.querySelector("#todo-panel .todo-items ");

    itemsE1.querySelectorAll("div"). forEach((Node)=>Node.remove());

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let itemE1 = document.createElement("div");

        let doneE1 = document.createElement("input");
        doneE1.type = "checkbox";
        itemE1.append(doneE1);

        let titleE1 = document.createElement("label")
        titleE1.innerText = task.title;
        itemE1.append(titleE1);

        let cancleE1 = document.createElement("button")
        cancleE1.innerText = "x";
        cancleE1.onclick=(e) =>{
            tasks.splice(i,1);
            renderTaskItems() 
        };
        itemE1.append(cancleE1);

        itemsE1.append(itemE1);
    }
}

renderEditor();
renderTaskItems();