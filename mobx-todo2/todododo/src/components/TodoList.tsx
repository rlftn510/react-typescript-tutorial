import React from 'react'

import { useObserver } from 'mobx-react';
import useStore from '../useStore'
import TodoItem from './TodoItem'

export default function TodoList() {
   const { todo } = useStore()
   return useObserver(() => (
      <section>
         {todo.todoData.map(v => (
            <TodoItem data={v} key={v.id}></TodoItem>
         ))}
      </section>
   ))
}
