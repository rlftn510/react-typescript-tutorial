import { action, observable } from 'mobx'

export class TodoStore {
   @observable
   public todos: {id: string, text: string}[] = [];

   @action
   public addTodo = (text:string): void => {
      this.todos.push({
         id:'',
         text:text
      })
   }

}

export default new TodoStore()