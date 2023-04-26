import TodoItem from './Todo'


function TodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map((todo,index) => <TodoItem key={`todoItem-${index}`} todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoView