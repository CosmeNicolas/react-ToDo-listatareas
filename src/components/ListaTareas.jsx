import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTareas = ({tareas,borrarTarea}) => {
  return (
     <ListGroup>
    {
      tareas.map((elementoTarea, posicionTarea)=> <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} borrarTarea={borrarTarea} />)
    }
     </ListGroup>
  );
};

export default ListaTareas;