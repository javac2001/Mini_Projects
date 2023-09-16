let addBtn = document.querySelector(".add-btn");
let userInp = document.querySelector(".user-inp input");
let userList = document.querySelector(".user-list ul")

addBtn.addEventListener('click', addFunc);

function addFunc() {
    if (userInp.value.length > 0) {
        let todoList = document.createElement("li");
        let addList = document.createElement("div");
        let delList = document.createElement("div");
        let spanDel = document.createElement("span")

        addList.classList.add("added-list");
        delList.classList.add("delete-button");
        spanDel.classList.add("fa-solid");
        spanDel.classList.add("fa-trash");

        userList.append(todoList);
        todoList.append(addList);
        todoList.append(delList);
        delList.append(spanDel);

        addList.innerText = userInp.value;

        userInp.value = ""
    }
}

userList.addEventListener("click", delfunc);

function delfunc(e){
    let delElement = e.target.parentElement.parentElement;
    if(e.target.tagName === "SPAN"){
        delElement.remove();
    }
}