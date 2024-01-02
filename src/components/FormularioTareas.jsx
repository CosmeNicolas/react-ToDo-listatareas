import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ListaTareas from './ListaTareas';

const FormularioTareas = () => {
  /* con el hook state , indico el estado que quiero manejar y debo inicializarlo con el dato q voy a trabaja
  el hook, en componentes de la web nos muestra cual es el estado inicializado */
  const [tarea, setTarea] = useState('');
  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
  /* con el state "tareas", vamos a guaradar las tareas en un array
   para luego renderizarlos en la lista
   */
  const [tareas, setTareas] = useState(tareasLocalStorage)
  
  /* agregamos la funcion del evento q quiero manejar con la palabra
  handle y el nombre del evento ej- handleSubmit */
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('desde el evento submit')

    setTareas([...tareas, tarea])
    //limpiar imput 
    setTarea('')

  }

   useEffect(() => {
   console.log('guardar en el local storage')
   localStorage.setItem('listaTareas',JSON.stringify(tareas))
  },[tareas])

  const borrarTarea = (nombreTarea)=>{
    const copiarTareas = tareas.filter((tarea)=> tarea !== nombreTarea);
    //actualizamos las tareas
    setTareas(copiarTareas)

  }

  return (
   <>
   {/* agrego el evento submit que es de los firmularios */}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>📝 Tareas por Hacer 📝 </Form.Label>
        <Form.Control type="text"
         placeholder="ej: Tarea 1"
         minLength={3} 
         maxLength={50}
         onChange={(e)=>{setTarea(e.target.value)}}
         value={tarea}
         />
       
      </Form.Group>
      <Button variant="warning" type="submit">
        Enviar
      </Button>
    </Form>
    <ListaTareas tareas={tareas} borrarTarea={borrarTarea}/>
   </>
  )
}

export default FormularioTareas