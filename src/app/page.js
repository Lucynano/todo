"use client";

import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home() {
    const [todos, setTodos] = React.useState([]);

    // Retrieve data from localStorage when component mounts
    React.useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            try {
                const parsedTodos = JSON.parse(storedTodos);
                if (Array.isArray(parsedTodos)) {
                    setTodos(parsedTodos);
                }
            } catch (error) {
                console.warn("Erreur lors du parsing de localStorage :", error);
                localStorage.removeItem("todos"); // nettoie le stockage corrompu
            }
        }
    }, []);
    

    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true
    ).length;

    const total_todos = todos.length;

    return (
        <div className="wrapper">
            <Header />
            <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
            <Form todos={todos} setTodos={setTodos} />
            <TODOList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Home;