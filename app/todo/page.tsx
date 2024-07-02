import revalidate from "../lib/actions/action1";

export default async function Blog() {
    const res = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos']}})

    const data = await res.json();

    revalidate()

    const todos = data.todos;
    console.log(JSON.stringify(data))
    console.log("todos", );
    return <div>
        {todos.map((todo: any) => <div key={todo.id}>
            {todo.title}
            {todo.description}
        </div>)}
    </div>
    
}