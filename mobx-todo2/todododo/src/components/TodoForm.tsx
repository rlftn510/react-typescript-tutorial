import React, { useState } from 'react'
import useStore from '../useStore'

function TodoForm() {
   const {todo} = useStore()
   const [content, setContent] = useState('')

   const onSubmit = (event:React.FormEvent) => {
      event.preventDefault()
      todo.addTodo(content)
   }

   const onChangeContent = (event:React.ChangeEvent<HTMLInputElement>) => {
      setContent(event.target.value)
   }

   return (
      <div>
         <form onSubmit={onSubmit}>
            <input type="text" onChange={onChangeContent} value={content} />
            <button type="submit">입력</button>
         </form>
      </div>
   )
}

export default TodoForm
