const Task = function (task) {
    this.text = task;
    this.id = Date.now();
  };

  export default Task;