import { Badge } from "react-bootstrap";

const InStock = () => {
  return (
    <Badge
      bg="success"
      style={{
        width: "6rem",
        display: "block",
        margin: "auto",
        marginBottom: "0.5rem",
        marginTop: "-1rem",
      }}
    >
      in-stock
    </Badge>
  );
};

export default InStock;
