import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FormularioTareas = () => {
  const [tarea, setTarea] = useState('');
  console.log('desde el input')

  return (
   <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>📝 Tareas por Hacer 📝 </Form.Label>
        <Form.Control type="text"
         placeholder="ej: Tarea 1"
         minLength={3} 
         maxLength={50}
         onChange={(e)=>setTarea(e.target.value)}
         value={tarea}
         />
      </Form.Group>
      <Button variant="warning" type="submit">
        Enviar
      </Button>
    </Form>



   </>
  )
}

export default FormularioTareas