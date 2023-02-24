export class Todo {
    constructor() {
        this.tasks = [];
    }

    create(task) {
        this.tasks.push({
            id: this.tasks.length + 1,
            ...task,
        });
    }

    getTasks() {
        return this.tasks;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((item) => item.id !== id);
    }

    update(id, task) {
        this.tasks = this.tasks.map((item) => {
            if(item.id === id) {
                return {
                    id, 
                    task,
                };
            }
            return item;
        });
    }

};