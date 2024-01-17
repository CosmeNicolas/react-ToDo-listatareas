import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ListaTareas from './ListaTareas';
import Swal from 'sweetalert2'

const FormularioTareas = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([])

  const borrarTarea = (nombreTarea) => {
    const copiarTareas = tareas.filter((tarea) => tarea !== nombreTarea);
    setTareas(copiarTareas)
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Tarea Borrada con éxito',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(tarea.trim() === ''){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa una tarea',
      });
      return
    }
    setTareas([...tareas, tarea])
    setTarea('')

    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Tarea agregada con éxito',
    })


  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>📝 Tareas por Hacer 📝 </Form.Label>
          <Form.Control type="text"
            placeholder="ej: Tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => { setTarea(e.target.value) }}
            value={tarea}
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Enviar
        </Button>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
    </>
  )
}

export default FormularioTareas