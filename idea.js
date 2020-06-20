

function renderEditor() {
    let inputEl = document.querySelector("#todo-panel .todo-editor >input");
    inputEl.onchange = (e) => {
        console.log("text , ", e.target.value);

    };
    let addTask = () => {
        let newTask = {
            title: inputEl.value,
            done: false,
        };
        inputEl.value = "";
        tasks.push(newTask);
        console.log("tasks,", tasks);
        renderTaskItems()//回车即提交
    }

    inputEl.onkeypress = (e) => {
        if (e.key === "Enter") {
            addTask();
            //回车后文本框消失

        }
    };
    let addE1 = document.querySelector("#todo-panel .todo-editor >button");
    addE1.onclick = (e) => {
        console.log("add click");
        let inputEl = document.createElement("input");
        inputEl.type = "text";
        //button后出现文本框，
    };
}