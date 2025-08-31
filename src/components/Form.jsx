function Form({ todos, setTodos }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const value = event.target.todo.value;

        const newTodo = {
            title: value,
            id: crypto.randomUUID(),
            is_completed: false,
        };

        // Update todo state
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        // Store update todo list in local storage
        const updatedTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updatedTodoList);

        // reset the form
        event.target.reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                type="text"
                name="todo"
                id="todo"
                placeholder="Write your next task"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"    
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="5" x2="12" y2="19" /> {/* ligne verticale */}
                    <line x1="5" y1="12" x2="19" y2="12" /> {/* ligne horizontale */}
                </svg>
            </button>
        </form>
    );
}

export default Form;