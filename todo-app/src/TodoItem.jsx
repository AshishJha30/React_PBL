function TodoItem({task, onDelete}) {
    return (

        <li>
        {task} <button onClick={onDelete}>❌</button>
        {/* <li>{props.task} <button onClick={props.onDelete}>❌</button> */}
        </li>
    );
}

export default TodoItem;