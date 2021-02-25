import React from 'react';
import {inject, observer} from 'mobx-react'
import {TodoStore} from './stores/todoStore'
import TodoList from './components/TodoList'
import TodoInput from './/components/TodoInput'

interface AppProps {
   todoStore?: TodoStore
}

@inject('todoStore')
@observer
class App extends React.Component<AppProps, {}> {
   render() {
      const store = this.props.todoStore as TodoStore
      console.log(store.addTodo)
      return (
         <div>
            {store.todos}
            <TodoInput addTodo={store.addTodo}/>
            <TodoList todos={store.todos}/>
         </div>
      )
   }
}
// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

export default App;
