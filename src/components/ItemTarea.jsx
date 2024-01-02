import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
  return (
    <>
      <ListGroup.Item className="mt-1 d-flex justify-content-between">{nombreTarea}
      <Button variant="dark" className="mx-1" >
        Primary
      </Button>
      </ListGroup.Item>
    </>
  );
};

export default ItemTarea;