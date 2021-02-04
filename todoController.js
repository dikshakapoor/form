
// camel case ids and classes , files, variables,

// render only the change - edit, delete 

// find, closest(include current node) 

// find("#abc")
// find(".abc")

// closest(".abc")
// closest("#abc")

// modular pattern follow properly, why to use IIFE

// use m - VC - use instances - JS classes - JS OOP

//new

//nothing to be shared by closure

//difference between class, object, instance - naming convention

// where is view?


import TODO_STATES from "./todoStates";
import domUtils from "./domUtils";
import todoView from "./todoView";
import Task from "./todoTask";
import TodoTaskMap from "./todoTaskMap";


const abc = () => { }
//in scope of module 

class TodoController {

  constructor() {
    this.todoTaskMap = new TodoTaskMap();
  }

  addNewTask = (task) => {
    let newTask = new Task(task);
    this.todoTaskMap.setTask = [newTask.id, newTask];
    return newTask;
  }

  getUserInput = () => {
    return document.querySelector("#todoDiscriptionInputField").value;
  }

  clearInputField = () => {
    document.getElementById("todoDiscriptionInputField").value = "";
  }

  createNewTask = () => {
    let task = this.getUserInput().trim();
    if (!task) return;
    let newTask = this.addNewTask(task);
    let taskListWrapperElement = document.getElementById("taskListWrapper");
    todoView.renderCard(newTask, taskListWrapperElement);
    this.clearInputField();
  };

  editTask = (editedTaskDiscription, textElement, id) => {
    this.todoTaskMap.setTask = [id, editedTaskDiscription];
    todoView.renderEditedTask(editedTaskDiscription, textElement);
  }

  handleKeyPress = (event, textElement, taskId) => {
    if (event.keyCode !== 13 || event.which !== 13) return null;
    let editedTaskDiscription = event.currentTarget.value;
    this.editTask(editedTaskDiscription, textElement, taskId);
  }

  handleCardAction = (event) => {
    let state = event.target.getAttribute("data-type");
    if (
      state === TODO_STATES.COMPLETED ||
      state === TODO_STATES.EDITED ||
      state === TODO_STATES.REMOVED
    ) {
      const targetElement = event.target;
      const itemId = parseInt(domUtils().closestNode(targetElement, "card").id);
      const cardElement = document.getElementById(itemId);
      const textElement = domUtils().childNode(cardElement, "text");
      switch (state) {

        case TODO_STATES.COMPLETED: {
          textElement.classList.add("lineThrough");
          break;
        }

        case TODO_STATES.REMOVED: {
          cardElement.remove();
          this.todoTaskMap.setTask = [itemId, null];
          break;
        }

        case TODO_STATES.EDITED: {
          textElement.classList.remove("lineThrough")
          let task = textElement.innerText;
          textElement.innerHTML = "";
          let inputElement = document.createElement("input");
          textElement.appendChild(inputElement);
          inputElement.focus();
          inputElement.value = task;
          inputElement.addEventListener("keydown", (event) => { this.handleKeyPress(event, textElement, itemId) });
          inputElement.onblur = () => {
            let editedTaskDiscription = inputElement.value;
            this.editTask(editedTaskDiscription, textElement, itemId);
          }
          break;
        }
      }
    }
  }

  addTaskOnEnter = (event) => {
    if (event !== undefined && (event.keyCode === 13 || event.which === 13)) {
      this.createNewTask();
    }
  }

  markAllTaskComplete = () => {
    const getAllkeys = [...this.todoTaskMap.getTask];
    getAllkeys.forEach(function (key) {
      const cardElement = domUtils().closestNode(document.getElementById(key), "card");
      const targetElement = domUtils().childNode(cardElement, "text");
      targetElement.classList.add("lineThrough");
    });
  }

  removeAllTask = () => {
    document.getElementById("taskListWrapper").innerHTML = "";
  }

  deleteAllCards = () => {
    this.todoTaskMap.setTask = [null, null];
    this.removeAllTask();
  }

  init = () => {
    document
      .getElementById("addTaskButton")
      .addEventListener("click", this.createNewTask);

    document
      .getElementById("taskListWrapper")
      .addEventListener("click", this.handleCardAction);

    document
      .getElementById("todoDiscriptionInputField")
      .addEventListener("keydown", this.addTaskOnEnter);

    document
      .getElementById("markAllComplete")
      .addEventListener("click", this.markAllTaskComplete);

    document
      .getElementById("deleteAll")
      .addEventListener("click", this.deleteAllCards);
  }

}

export default TodoController;








