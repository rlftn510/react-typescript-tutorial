import React from 'react';
import {inject, observer} from 'mobx-react'
// import {TodoStore} from './stores/todoStore'

interface TodoInputProps {
   addTodo(text: string): void;
}

@observer
class TodoInput extends React.Component<TodoInputProps, {}> {

   private _input: HTMLInputElement | any;
   render() {
      
      return (
         <div>
            <input type="text" ref={(ref) => {this._input = ref as HTMLInputElement}}/>
            <button onClick={() => this._addTodo()}>입력</button>
         </div>
      )
   }
   private _addTodo = () => {
      const text = this._input.value
      if( text !== '' ) {
         this.props.addTodo(text)
         this._input.value = '';
      }
      
   }
}
export default TodoInput;
