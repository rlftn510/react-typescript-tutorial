import { observable } from 'mobx'

class Store {
   @observable
   age: number = 25;

   public addAge(): void {
      console.log(this.age)
      this.age = this.age + 1;
  }
}

export default new Store()