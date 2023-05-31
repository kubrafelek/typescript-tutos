import React from 'react'

type IProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addMessage: () => void // for func 
}

const Input: React.FC<IProps> = ({ todo, setTodo, addMessage }: IProps) => {
    return (
        <div>
            <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="Enter..." />
            <button onClick={addMessage}>Add</button>
        </div >
    )
}

export default Input