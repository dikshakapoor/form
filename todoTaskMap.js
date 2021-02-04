class TodoTaskMap {
    constructor() {
        this._map = new Map();
    }

    get getTask() {
        return this._map.keys()
    }

    set setTask(taskDetails) {
        if (taskDetails[0] === null && taskDetails[1] === null)
            this._map.clear();

        else if (taskDetails[0] && taskDetails[1] === null) {
            this._map.delete(taskDetails[0]);
        }
        else this._map.set(taskDetails[0], taskDetails[1]);
    }
}
export default TodoTaskMap;