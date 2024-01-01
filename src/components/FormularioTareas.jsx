import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ListaTareas from './ListaTareas';

const FormularioTareas = () => {
  /* con el hook state , indico el estado que quiero manejar y debo inicializarlo con el dato q voy a trabaja
  el hook, en componentes de la web nos muestra cual es el estado inicializado */
  const [tarea, setTarea] = useState('');

  /* con el state "tareas", vamos a guaradar las tareas en un array
   para luego renderizarlos en la lista
   */
  const [tareas, setTareas] = useState([])
  
  

  return (
   <>
    <Form>
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
    <ListaTareas/>
   </>
  )
}

export default FormularioTareas