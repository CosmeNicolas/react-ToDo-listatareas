import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTareas = ({tareas, borrarTareas}) => {
  return (
     <ListGroup>

    {
      tareas.map((elementoTarea, posicionTarea)=> <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} borrarTareas={borrarTareas} />)
    }

      
     </ListGroup>
  );
};

export default ListaTareas;