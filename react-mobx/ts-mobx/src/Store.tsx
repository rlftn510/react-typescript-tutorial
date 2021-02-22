import { observable } from 'mobx'

interface Todo {
   age: number;
   addAge: () => void
}

export const store = observable<Todo>({
   age: 25,
   addAge() {
      this.age++
   }
})
// class Store {
//    @observable
//    age:number = 25

//    public addAge(): void {
//       console.log(this.age)
      
//   }
// }

// export default new Store()