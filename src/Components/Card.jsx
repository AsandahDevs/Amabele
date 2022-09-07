import { Badge, Button } from "react-bootstrap";

const Cards = (props) => {
  return (
    <figure
      className="card"
      style={{
        width: "225px",
        height: "auto",
        marginRight: "1rem",
        marginTop: "2rem",
      }}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ height: "10rem", objectFit: "contain" }}
        className="card-img-top"
      />
      <h2 className="text-black">R{props.price}</h2>
      <h3 style={{ fontSize: "medium", color: "grey" }}>
        Category:{props.category}
      </h3>
      <figcaption className="card-body text-black">
        {props.description} {props.litres}
      </figcaption>
      <Badge
        style={{
          width: "6rem",
          display: "block",
          margin: "auto",
          marginBottom: "0.5rem",
          marginTop: "-1rem",
        }}
      >
        {props.available ? "in-stock" : "out-of-stock"}
      </Badge>
      <Button
        variant="success"
        style={{
          borderRadius: "3rem",
          width: "10rem",
          display: "block",
          margin: "auto",
          marginBottom: "1rem",
        }}
        size="sm"
      >
        Add to cart
      </Button>
    </figure>
  );
};

export default Cards;
