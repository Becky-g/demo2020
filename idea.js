

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



let importantE1 = document.createElement("button");
    importantE1.className = "important";
    let imprtantChange = (obj) =>{
        obj.style.color = 'gold';
    }
    importantE1.innerText = "★";
    importantE1.onclick = () => {
        imprtantChange(importantE1);
    }
    
    ctrlbarE1.append(importantE1);//星标

    importantE1.onclick = ()=> {
        importantE1.style.color ='gold';
      }

      let importantE1 = document.createElement("button");
      importantE1.className = "important";
      importantE1.innerText = ""
      importantE1.onclick = (e)=> {
          console.log("important, ",e);
          importantE1.classList.add("done")
          
        }
      ctrlbarE1.append(importantE1);
//
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
              console.log("checkbox:", e);
              if (importantE1.checked) {
                  importantE1.classList.add("done");
              }
              else {
                  importantE1.classList.remove("done");
              }
          };
          ctrlbarE1.append(importantE1);



          let arr = ('.todo-items').find('div').toArray();// 把三个div放进数组里面


          let moveDiv = (id_1, id_2) => //参数传递的是你需要交换位置的两个div的ID
    {
        var insert = function (nodeInsert, nodeTo) {
            if (nodeInsert.insertAdjacentElement) {
                nodeTo.insertAdjacentElement('beforeBegin', nodeInsert);
            }
            else {
                nodeTo.parentNode.insertBefore(nodeInsert, nodeTo);
            }
        }
        var obj = document.createElement("a");
        var t1 = document.getElementById(id_1);
        var t2 = document.getElementById(id_2);
        insert(obj, t2);
        insert(t2, t1);
        insert(t1, obj);
        document.body.removeChild(obj);
    }

    let upTask = () => {
        let arr=[]
         arr.push(tasks);
         var temp;// 1 2对调
         temp = arr[0];
         arr[0] = arr[1];
         arr[1] = temp;
     };
     upTask();


     var newObj = document.createElement("div");
        newObj.setAttribute("class","new");
        var d1 = document.getElementsByClassName(tasks[i]);
        var d2 = document.getElementsByClassName(tasks[i]);
        var d3 = document.getElementsByClassName(tasks[(i+1)]);
        d1.parentElement.insertBefore(newObj,d3);
        d1.parentElement.insertBefore(d2,d3);
        d1.parentElement.insertBefore(d3,newObj);
        d1.parentElement.removeChild(newObj);


        ///
        
        var div1 = document.getElementsByClassName("task 0");
        var div2 = document.getElementsByClassName("task 1");
        var temobj1 = document.getElementsByClassName("<div></div>");
        var temobj2 = document.getElementsByClassName("<div></div>");
        temobj1.insertBefore(div1);
        temobj2.insertBefore(div2);
        div1.insertAfter(temobj2);
        div2.insertAfter(temobj1);
        temobj1.remove();
        temobj2.remove();


        ///
        let arr = []
        var d = 'titleE1'.innerText;
        arr.push(d);
        var temp = null;// 1 2对调
        temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        upE1.append(arr);
