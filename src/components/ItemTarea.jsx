import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({nombreTarea , borrarTareas}) => {
  return (
    <>
      <ListGroup.Item className="mt-1 d-flex justify-content-between">{nombreTarea}
      <Button variant="dark" className="mx-1" onClick={ ()=> borrarTareas(nombreTarea)} >
        Borrar
      </Button>
      </ListGroup.Item>
    </>
  );
};

export default ItemTarea;