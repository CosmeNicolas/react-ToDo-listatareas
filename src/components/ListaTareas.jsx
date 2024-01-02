import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTareas = ({tareas}) => {
  return (
     <ListGroup>

    {
      tareas.map((elementoTarea, posicionTarea)=><ItemTarea key={posicionTarea} nombreTarea={elementoTarea}/>)
    }

      
     </ListGroup>
  );
};

export default ListaTareas;