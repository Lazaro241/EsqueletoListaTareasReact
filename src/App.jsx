import './App.css'

function App() {
  return (
    <div className="contenedor">
      <h2 className="titulo">Lista de tareas de Lázaro</h2>
      
      <div className="grupo-entrada">
        <input 
          type="text" 
          className="barraAddTarea" 
          placeholder="Agregar nueva tarea" 
        />
        <button className="botonAddTarea">Agregar</button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Completado</th>
            <th>Tarea</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="checkboxTarea">
          <tr>
            <td><input type="checkbox"/></td>
            <td>Completar ejercicios de React</td>
            <td>
              <button>Eliminar</button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td>Preparar presentación del proyecto</td>
            <td>
              <button>Eliminar</button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td>Revisar documentación de JavaScript</td>
            <td>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
