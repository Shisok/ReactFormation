import { nanoid } from "nanoid"
import { useState } from "react"
import ListItem from "./component/ListItem"
function App() {

  const [todoList, setToDoList] = useState([
    { id: nanoid(8), content: "item" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ])

  const [toDo, setToDo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  function deleteToDo(id) {
    setToDoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (toDo === "") {
      setShowValidation(true)
      return
    }

    setToDoList([...todoList, { id: nanoid(), content: toDo }])
    setToDo("")
    setShowValidation(false)
  }

  return (
    <div className="h-screen ">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            value={toDo}
            onChange={e => setToDo(e.target.value)}
            className="mt-1 block w-full rounded" type="text">
          </input>
          {showValidation && (
            <p className="text-red-400">
              Ajoutez d'abord du contenu à votre tâche
            </p>
          )}
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]" > Ajouter</button>
        </form>
        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">
              Pas d'items à afficher...
            </li>
          )}
          {todoList.length > 0 && (
            todoList.map(item =>
              <ListItem key={item.id} itemData={item} deleteToDo={deleteToDo} />
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
