import { Button } from "react-bootstrap";
import InStock from "./InStock";
import OutOfStock from "./OutOfStock";
import { useCart } from "react-use-cart";
import { memo } from "react";

const Cards = (props) => {
  const { addItem } = useCart();
  return (
    <figure
      className="card animate__animated animate__slideInRight swiper-slide"
      style={{
        width: "180px",
      }}
    >
      <img
        src={props.image}
        loading="lazy"
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
      {props.available ? (
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
      ) : (
        ""
      )}
    </figure>
  );
};

export default memo(Cards);
