import { Badge } from "react-bootstrap";

const OutOfStock = () => {
  return (
    <Badge
      bg="danger"
      style={{
        width: "6rem",
        display: "block",
        margin: "auto",
        marginBottom: "0.5rem",
        marginTop: "-1rem",
      }}
    >
      out-of-stock
    </Badge>
  );
};

export default OutOfStock;
