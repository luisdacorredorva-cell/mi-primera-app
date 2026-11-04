import { useState } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')

  const agregarTarea = (e) => {
    e.preventDefault()
    if (nuevaTarea.trim() === '') return

    setTareas((prevTareas) => [
      ...prevTareas,
      { id: Date.now(), nombre: nuevaTarea.trim() }
    ])
    setNuevaTarea('')
  }

  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <main className="contenedor">
      <h1>Mi primera aplicación publicada en Vercel</h1>
      <p>Aplicación desarrollada con React y Vite</p>

      <form className="formulario" onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <h2>Tareas registradas: {tareas.length}</h2>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <span>{tarea.nombre}</span>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App