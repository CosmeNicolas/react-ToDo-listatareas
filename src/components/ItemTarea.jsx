import { ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
  return (
    <>
      <ListGroup.Item className="mt-1">{nombreTarea}</ListGroup.Item>
    </>
  );
};

export default ItemTarea;