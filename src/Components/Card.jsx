import { Button } from "react-bootstrap";
import InStock from "./InStock";
import OutOfStock from "./OutOfStock";
import { addItem } from "../../features/cart/cart";
import { memo } from "react";
import { useDispatch } from "react-redux";

const Cards = (props) => {
  const dispatch = useDispatch();
  return (
    <figure className="card animate__animated animate__slideInRight swiper-slide">
      <img
        src={props.image}
        loading="lazy"
        alt={props.alt}
        style={{ height: "10rem", objectFit: "contain", marginTop: "0.5rem" }}
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
          onClick={() => dispatch(addItem(props))}
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
