
export default async function Home() {
  const res = await fetch('https://sum-server.100xdevs.com/todos', {
    next: {
      revalidate: 10
    }
  })

    const data = await res.json();
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
