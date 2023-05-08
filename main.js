let expenseAmount = document.getElementById("expense");
let desc = document.getElementById("desc");
let btn = document.getElementById("btn");
let item = document.getElementById("items");
let option = document.getElementById("option");

//adding to ui

btn.addEventListener("click", addItems);


function addItems(e) {
  e.preventDefault();
  //taking values from input

  //creating new Element
  let newElement = document.createElement("li");
  newElement.className = "added";

  //creating object for local storage
  let obj = {
    expense: expenseAmount.value,
    desc1: desc.value,
    opt: option.value,
  };

  let details = JSON.stringify(obj);




  // making delete button
  let addBtn = document.createElement("button");
  addBtn.className = "btn btn-danger btn-sm float-right delete";
  addBtn.innerText = "Delete";

  //making edit button
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-dark ";
  editBtn.innerText = "Edit";

  if (obj.desc1 !== "" && obj.expense !== "") {
    localStorage.setItem(obj.desc1, details);
    newElement.appendChild(
      document.createTextNode(obj.expense + " " + obj.desc1 + " " + obj.opt)
    );
    item.appendChild(newElement);
    newElement.appendChild(addBtn);
    newElement.appendChild(editBtn);
  } else {
    // alert("this field cant be empty");
  }

  //adding deleting functionality

 addBtn.addEventListener("click", delBtn);
  function delBtn(e) {
 
    addBtn.parentElement.remove()
    localStorage.removeItem(obj.desc1)

   
  }

  //making edit button work

 editBtn.addEventListener("click", editBtn1);

  function editBtn1(e) {
    editBtn.parentElement.remove()
    expenseAmount.value=obj.expense
    desc.value=obj.desc1
  }
}


//getting data from localStorage after refreshing

window.addEventListener("load", loadDataFromLocalStorage);

function loadDataFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const details = localStorage.getItem(key);
      const obj = JSON.parse(details);
      const newElement = document.createElement("li");
      newElement.className = "added";
      newElement.appendChild(
        document.createTextNode(obj.expense + " " + obj.desc1 + " " + obj.opt)
      );
      const addBtn = document.createElement("button");
      addBtn.className = "btn btn-danger btn-sm float-right delete";
      addBtn.innerText = "Delete";
      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-dark ";
      editBtn.innerText = "Edit";
      newElement.appendChild(addBtn);
      newElement.appendChild(editBtn);
      item.appendChild(newElement);
      addBtn.addEventListener("click", delBtn);
      function delBtn(e) {
        addBtn.parentElement.remove();
        localStorage.removeItem(obj.desc1);
      }
      editBtn.addEventListener("click", editBtn1);
      function editBtn1(e) {
        expenseAmount.value = obj.expense;
        desc.value = obj.desc1;
      }
    }
  }

