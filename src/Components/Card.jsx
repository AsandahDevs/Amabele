import { Button } from "react-bootstrap";
import InStock from "./InStock";
import OutOfStock from "./OutOfStock";
import { useCart } from "react-use-cart";

const Cards = (props) => {
  const { addItem } = useCart();
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

      {props.available ? <InStock /> : <OutOfStock />}

      <Button
        onClick={() => addItem(props.item)}
        variant="dark"
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
