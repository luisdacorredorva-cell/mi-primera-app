import { useState } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return

    setTareas([
      ...tareas,
      { id: Date.now(), nombre: nuevaTarea }
    ])

    setNuevaTarea('')
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  return (
    <main className="contenedor">
      <h1>Mi primera aplicación publicada en Vercel</h1>
      
      <p>Aplicación desarrollada con React y Vite</p>

      <div className="formulario">
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />

        <button onClick={agregarTarea}>
          Agregar
        </button>
      </div>

      <h2>Tareas registradas: {tareas.length}</h2>

      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            {tarea.nombre}
            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
