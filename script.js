
let tasks = [];//{title:"dddd", done:fasle,important}

function renderEditor() {
    let inputEl = document.querySelector("#todo-panel .todo-editor >input");
    inputEl.onchange = (e) => {
        console.log("text : ", e.target.value);

    };

    let addTask = () => {
        if (inputEl.value.length === 0) {
            return;
        }
        let newTask = {
            title: inputEl.value,
            done: false,
        };
        inputEl.value = "";
        tasks.push(newTask);
        console.log("tasks:", tasks);

        renderTaskItems();
    }

    inputEl.onkeypress = (e) => {
        if (e.key === "Enter") {
            addTask();

        }
    };

    let addE1 = document.querySelector("#todo-panel .todo-editor >button");
    addE1.onclick = (e) => {
        addTask();
    };

}

function renderTaskItems() {

    let itemsE1 = document.querySelector("#todo-panel .todo-items ");

    itemsE1.querySelectorAll("div").forEach((Node) => Node.remove());

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let itemE1 = document.createElement("div");
        itemE1.className = "task";
        if (tasks) {
            itemE1.classList.add(i);
        }

        let doneE1 = document.createElement("input");
        doneE1.type = "checkbox";
        doneE1.checked = task.done;
        if (task.done) {
            itemE1.classList.add("done");
        }
        else {
            itemE1.classList.remove("done");
        }
        doneE1.onchange = (e) => {
            task.done = e.target.checked;
            console.log("checkbox:", e);
            if (task.done) {
                itemE1.classList.add("done");
            }
            else {
                itemE1.classList.remove("done");
            }
        };
        itemE1.append(doneE1);

        let titleE1 = document.createElement("label");
        titleE1.innerText = task.title;
        itemE1.append(titleE1);

        let ctrlbarE1 = renderTaskCtrlBar(tasks, i);

        itemE1.append(ctrlbarE1);
        itemsE1.append(itemE1);
    }
}

function renderTaskCtrlBar(tasks, i) {

    let ctrlbarE1 = document.createElement("div");
    ctrlbarE1.className = "ctrlbar";


    let importantE1 = document.createElement("input");
    importantE1.type = "checkbox";
    importantE1.className = "important";
    if (importantE1.checked) {
        importantE1.classList.add("done");
    }
    else {
        importantE1.classList.remove("done");
    }
    importantE1.onchange = (e) => {
        importantE1.checked = e.target.checked;
        console.log("check_important:", e);
        if (importantE1.checked) {
            importantE1.classList.add("done");
        }
        else {
            importantE1.classList.remove("done");
        }
    };
    ctrlbarE1.append(importantE1);

    let upE1 = document.createElement("button");
    upE1.className = "up";
    if (i === 0) {
        upE1.disabled = true;
    }
    upE1.innerText = "🠕";

    upE1.onclick = () => {
        console.log("up:", tasks[i]);
        upE1.classList.add("done");

        var a;
        a = tasks[i];
        tasks[i] = tasks[(i - 1)];
        tasks[(i - 1)] = a;


        renderTaskItems();

    };

    ctrlbarE1.append(upE1);

    let downE1 = document.createElement("button");
    if ((i + 1) === tasks.length) {
        downE1.disabled = true;
    }
    downE1.innerText = "🠗";
    downE1.onclick = () => {
        console.log("down:", tasks[i]);
        downE1.classList.add("done");
        var a;
        a = tasks[i];
        tasks[i] = tasks[(i + 1)];
        tasks[(i + 1)] = a;


        renderTaskItems();
    };
    ctrlbarE1.append(downE1);

    let cancleE1 = document.createElement("button");
    cancleE1.innerText = "☓";
    cancleE1.onclick = () => {
        tasks.splice(i, 1);
        renderTaskItems();
    };
    ctrlbarE1.append(cancleE1);
    return ctrlbarE1;
}

renderEditor();
renderTaskItems();