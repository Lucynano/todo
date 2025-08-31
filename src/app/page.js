"use client";

import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home() {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        setTodos([
            {
                title: "Some task", 
                id: crypto.randomUUID(), 
                is_completed: false,
            },
            {
                title: "Some other task", 
                id: crypto.randomUUID(), 
                is_completed: true,
            },
            {
                title: "Last task", 
                id: crypto.randomUUID(), 
                is_completed: false,
            },
        ]);
    }, []);

    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true
    ).length;

    const total_todos = todos.length;

    return (
        <div className="wrapper">
            <Header />
            <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
            <Form setTodos={setTodos} />
            <TODOList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Home;