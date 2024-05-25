import { Injectable } from "@angular/core";
import { TODOS } from "../modal/mock-data";
import { Todo } from "../modal/todo.model";

@Injectable({
    providedIn: "root"
})
export class TodosService {

    async getTodos() {
        await this.sleep(3000)
        return TODOS;
    }

    async addTodo(todo: Partial<Todo>): Promise<Todo> {
        await this.sleep(3000)
        return {
            ...todo,
            id: Math.random().toString(36).substr(2, 9)
        } as Todo;
    }

    async deleteTodo(id: string) {
        await this.sleep(500)
    }

    async updateTodo(id: string, completed: boolean) {
        await this.sleep(500)
    }

    async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}