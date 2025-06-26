import {useDispatch ,useSelector} from 'react-redux'
import {removeTodo} from '../feature/todo/todoSlice'

export default function TodoItem() {
    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()

    return (
        <>
    <div>Todos</div>
    
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded bg-gray-500"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              X
            </button>
          </li>
        ))}
      
    </>
    )
}