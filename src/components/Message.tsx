import React from 'react'
import { Todos } from '../types/Type'

type Props = {
    todos: Todos[],
    deleteMessage: (id: number) => void
}

const Message: React.FC<Props> = ({ todos, deleteMessage }) => {
    return (
        <div>
            {
                todos.map((todo, i) => (
                    <div key={i}> {todo.message} -
                        <span onClick={() => deleteMessage(todo.id)} style={{ cursor: 'pointer' }}> x
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Message