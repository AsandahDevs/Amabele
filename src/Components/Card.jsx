import { Button } from "react-bootstrap";
import InStock from "./InStock";
import OutOfStock from "./OutOfStock";
import { addItem } from "../features/cart/cart";
import { memo } from "react";
import { useDispatch } from "react-redux";

const Cards = ({alt, image, price, category, description, litres, available, item}) => {
  const dispatch = useDispatch();
  return (
    <figure className="card animate__animated animate__slideInRight swiper-slide">
      <img
        src={image}
        loading="lazy"
        alt={alt}
        style={{ height: "10rem", objectFit: "contain", marginTop: "0.5rem" }}
        className="card-img-top"
      />
      <h2 className="text-black">R{price}</h2>
      <h3 style={{ fontSize: "medium", color: "grey" }}>
        Category:{category}
      </h3>
      <figcaption className="card-body text-black">
        {description} {litres}
      </figcaption>

      {available ? <InStock /> : <OutOfStock />}
      {available ? (
        <Button
          onClick={() => dispatch(addItem(item))}
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
